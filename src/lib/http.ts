export class HttpError extends Error {
  status: number
  body: unknown

  constructor(message: string, status: number, body: unknown) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.body = body
  }
}

type HttpClientOptions = {
  baseUrl?: string
  timeoutMs?: number
  headers?: Record<string, string>
}

export class HttpClient {
  private baseUrl: string
  private timeoutMs: number
  private headers: Record<string, string>

  constructor(options: HttpClientOptions = {}) {
    this.baseUrl = options.baseUrl ?? import.meta.env.VITE_API_BASE_URL ?? ''
    this.timeoutMs = options.timeoutMs ?? 15_000
    this.headers = options.headers ?? {}
  }

  async get<T>(path: string, init?: RequestInit): Promise<T> {
    return this.request<T>(path, { ...init, method: 'GET' })
  }

  async post<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    return this.request<T>(path, {
      ...init,
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        ...(init?.headers ?? {})
      }
    })
  }

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), this.timeoutMs)

    try {
      const url = this.baseUrl ? new URL(path, this.baseUrl).toString() : path
      const res = await fetch(url, {
        ...init,
        signal: controller.signal,
        headers: { ...this.headers, ...(init.headers ?? {}) }
      })

      const contentType = res.headers.get('content-type') || ''
      const isJson = contentType.includes('application/json')
      const body = isJson ? await res.json().catch(() => null) : await res.text().catch(() => '')

      if (!res.ok) throw new HttpError(res.statusText || 'Request failed', res.status, body)
      return body as T
    } finally {
      window.clearTimeout(timeout)
    }
  }
}

export const http = new HttpClient()

