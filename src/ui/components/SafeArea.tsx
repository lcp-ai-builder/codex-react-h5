import { Box, type BoxProps } from '@chakra-ui/react'

export function SafeArea(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        paddingTop: 'var(--safe-top)',
        paddingRight: 'var(--safe-right)',
        paddingBottom: 'var(--safe-bottom)',
        paddingLeft: 'var(--safe-left)',
        ...props.sx
      }}
    />
  )
}

