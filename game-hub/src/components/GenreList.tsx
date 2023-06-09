import {
   Avatar,
   HStack,
   Heading,
   Image,
   List,
   ListItem,
   Spinner,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
   const { data: genres, isLoading } = useGenre();

   if (isLoading) return <Spinner />;
   return (
      <List>
         {genres.map((genre) => (
            <ListItem key={genre.id} paddingY='10px'>
               <HStack>
                  <Image
                     src={getCroppedImageUrl(genre.image_background)}
                     boxSize='32px'
                     borderRadius={8}
                  />
                  <p>{genre.name}</p>
               </HStack>
            </ListItem>
         ))}
      </List>
   );
}

export default GenreList;
