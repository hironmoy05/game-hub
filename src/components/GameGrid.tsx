import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  if (error) return <Text color='red'>{error.message}</Text>

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    // <Box p={10}>
    //   <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
    // {
    //   isLoading && skeletons.map(skeleton =>
    //     <GameCardContainer key={skeleton}>
    //       <GameCardSkeleton />
    //     </GameCardContainer>)
    // }
    // {
    //   data?.pages.map((page, index) =>
    //     <React.Fragment key={index}>
    //       {page.results.map((game) =>
    //         <GameCardContainer key={game.id}>
    //           <GameCard game={game} />
    //         </GameCardContainer>
    //       )}
    //     </React.Fragment>)
    // }
    //   </SimpleGrid>
    //   {hasNextPage &&
    //     <Button
    //       marginTop={5}
    //       disabled={isFetchingNextPage}
    //       onClick={() => fetchNextPage()}>
    //       {isFetchingNextPage ? "Loading..." : "Load More"}
    //     </Button>
    //   }
    // </Box>
    <InfiniteScroll
      dataLength={fetchedGamesCount} //This is important field to render the next data
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} p={10}>
        {
          isLoading && skeletons.map(skeleton =>
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>)
        }
        {
          data?.pages.map((page, index) =>
            <React.Fragment key={index}>
              {page.results.map((game) =>
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              )}
            </React.Fragment>)
        }
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid