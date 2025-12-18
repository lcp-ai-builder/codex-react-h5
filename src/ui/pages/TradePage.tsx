import {
  Box,
  Heading,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { MAX_LEVERAGE_PERCENT } from '@/lib/appConfig'

export function TradePage() {
  const subtleText = useColorModeValue('gray.600', 'gray.400')
  const markColor = useColorModeValue('gray.600', 'gray.400')
  const trackBg = useColorModeValue('gray.200', 'gray.700')
  const filledBg = useColorModeValue('teal.500', 'teal.300')

  const [leveragePercent, setLeveragePercent] = useState(0)
  const maxLeveragePercent = MAX_LEVERAGE_PERCENT
  const markSegments = 5
  const marks = useMemo(() => {
    const step = Math.max(1, Math.round(maxLeveragePercent / markSegments))
    return Array.from({ length: markSegments + 1 }, (_, i) =>
      i === markSegments ? maxLeveragePercent : i * step
    )
  }, [maxLeveragePercent, markSegments])

  return (
    <VStack align="stretch" spacing="4">
      <Heading size="md">交易</Heading>
      <Text color={subtleText}>这里是“交易”页面的占位内容。</Text>

      <Box pt="2">
        <HStack mb="2" justifyContent="space-between" spacing="3">
          <Text fontWeight="medium">杠杆比例</Text>
          <Text fontWeight="semibold" color={filledBg}>
            {leveragePercent}%
          </Text>
        </HStack>
        <Slider
          value={leveragePercent}
          min={0}
          max={maxLeveragePercent}
          step={5}
          onChange={setLeveragePercent}
        >
          {marks.map((value) => (
            <SliderMark
              key={value}
              value={value}
              mt="2.5"
              fontSize="10px"
              color={markColor}
              transform="translateX(-50%)"
              whiteSpace="nowrap"
            >
              {value}
            </SliderMark>
          ))}
          <SliderTrack bg={trackBg}>
            <SliderFilledTrack bg={filledBg} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  )
}
