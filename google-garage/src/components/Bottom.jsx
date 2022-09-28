import { Text,HStack,Divider,VStack,Stack,Image,Select } from "@chakra-ui/react";
const Bottom = () =>{
    return (
        <>
          <Stack>
          <HStack>
          <HStack >
             <Text fontSize='3x1'>A</Text>
             <Text fontSize='4xl'>Grow with Google</Text>
             <Text fontSize='2xl'>programme</Text>
          </HStack>
          <HStack align='end'>
            <Text w='100'>Privacy & Terms</Text>
            <Select placeholder="Country">
                <option value="in">India</option>
                <option value="us">USA</option>
                <option value="ch">China</option>
                <option value="sa">South Africa</option>
                <option value="eg">England</option>
                <option value="pk">Pakistan</option>
                <option value="rs">Russia</option>
                <option value="gr">Germany</option>
                <option value="ja">Japan</option>
                <option value="mx">Mexico</option>
                <option value="ag">Afganisthan</option>
                <option value="bd">Bangladesh</option>
                <option value="np">Nepal</option>
                <option value="bh">Bhutan</option>
                <option value="id">Indonesia</option>
                <option value="kz">Kazakasthan</option>
                <option value="sd">Saudi Arabia</option>
                <option value="tr">Turkey</option>
                <option value="tw">Taiwan</option>
            </Select>
          </HStack>
          </HStack>
         <Divider/>
         <HStack>
            <Text>Share</Text>
            <Image src='https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw' alt='facebook'/>
            <Image src='https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw' alt='twitter'/>
            <Image src='https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw' alt='linkedin'/>
         </HStack>
          </Stack>
        </>
    );
}
export default Bottom;