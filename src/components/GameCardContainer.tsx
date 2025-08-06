import { Box } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width='300px' overflow='hidden' borderRadius={10}>{children}</Box>
  )
}

export default GameCardContainer