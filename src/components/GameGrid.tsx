import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

  	if (error) return <Text>{error.message}</Text>;

	return (
		<InfiniteScroll
			dataLength={(data?.pages.length) ? data?.pages.length : 0}
			next={()=>fetchNextPage()}
			hasMore={hasNextPage}
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
				  <b>Yay! You have seen it all</b>
				</p>
			}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
			>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data?.pages.map((page, index) =>
					<React.Fragment key={index}>
						{page.results.map((game)=> 
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						)}
					</React.Fragment>
				)}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
