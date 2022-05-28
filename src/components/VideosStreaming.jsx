import React,{useState} from 'react'
import { Box, Flex, Grid, Heading, Image, Input, Text } from '@chakra-ui/react'
export default function VideosStreaming() {
            const [data,setData]=useState({})

            const handleChange = async (e) =>{
              console.log(e.target.value);
              let value = e.target.value;
              if(value.length > 2){
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM&maxResults=30`);
                const res = await response.json();
                setData(res.items);
              }
            }
          
            console.log(data)
  return (
    <div>
       <div className="App">
      <Box m='auto' maxW='98%' bgColor='#F7FAFC'>
        <Box ml='5'>
        <Flex gap='5'>
        <Image mb='5' mt='5' h='10' src='https://www.pngfind.com/pngs/m/591-5915021_clip-art-youtube-social-media-logos-hd-png.png'></Image>
        <Input mb='5' mt='5' maxW='50%' type='text' onChange={handleChange}></Input>
        </Flex>
        </Box>
        <hr/>
        <Box maxW='100%'>
          <Grid  templateColumns={{base:'repeat(1,99%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
            
            {
              (data.length==null) ?
              <>
              <iframe src={`https://www.youtube.com/embed/vniNki7HMQs`}></iframe>
              <iframe src={`https://www.youtube.com/embed/3gqDr_40hPY`}></iframe>
              <iframe src={`https://www.youtube.com/embed/Cg8rGIb8rS0`}></iframe>
              <iframe src={`https://www.youtube.com/embed/bSsnjFzaNK8`}></iframe>
              <iframe src={`https://www.youtube.com/embed/zedTXnTT8SM`}></iframe>
              <iframe src={`https://www.youtube.com/embed/swFYu4TiXKQ`}></iframe>
              <iframe src={`https://www.youtube.com/embed/Qy064xFEW64`}></iframe>
              <iframe src={`https://www.youtube.com/embed/LlKAna21fLE`}></iframe>
              <iframe src={`https://www.youtube.com/embed/ZVO8Wt_PCgE`}></iframe>
              <iframe src={`https://www.youtube.com/embed/2Oy4HpUJSgE`}></iframe>
              <iframe src={`https://www.youtube.com/embed/j9qGmO8Yy-Y`}></iframe>
              <iframe src={`https://www.youtube.com/embed/HAnw168huqA`}></iframe>
              <iframe src={`https://www.youtube.com/embed/HZcXup7p5-8`}></iframe>
              <iframe src={`https://www.youtube.com/embed/lKAna21fLE`}></iframe>
              <iframe src={`https://www.youtube.com/embed/Unzc731iCUY`}></iframe>
             
                </>
              :
              data.map((e=>{
                return (
                  <Box boxShadow='base' p='' rounded='md' bg='white'>
                  <Flex direction='column'>
                  <iframe allowFullScreen="true" w='100%' src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
                  <Heading pl='1' textAlign='left' h='40px' overflow='hidden' size='sm'>{e.snippet.title}</Heading>
                  <Text pl='1' textAlign='left' h='10%' lineHeight='5' overflow='hidden'>{e.snippet.description}</Text>
                  </Flex>
              </Box>
                )
              }))
            }
          </Grid>
        </Box>
      </Box>
    </div>
    </div>
  )
}
