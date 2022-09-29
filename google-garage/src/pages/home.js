import { Image, Text, Button,HStack,VStack,Box } from "@chakra-ui/react";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import './home.css'
import Accrodianfaq from "../components/Accrodianfaq";
const Home = () => {
  return (
    <>
      <div style={{width:"80%",display:"flex",justifyContent:'space-around',margin:'auto',marginTop:'100px'}}>
        <div style={{width:"40%",lineHeight:'1'}}>
        <Text fontSize="5xl" mb='30px'>
          Learn the skills of <br /> the future
        </Text>
        <Text fontSize='lg' lineHeight='1.5' fontStyle='inherit'>
          Accelerate your career or business with an online <br /> digital
          skills course in everything from marketing <br /> to coding and
          beyond.
        </Text>
        <Button bg="blue.600" mt='30px' borderRadius='0' p='5'>Find Your Course</Button>
        </div>
        <div style={{width:"40%"}}>
            <Image src="https://www.doors-universe.com/wp-content/uploads/2020/08/man_on_ladder-1024x629.png" alt="google_learn" w='80%'/>
        </div>
      </div>
      <div style={{marginTop:'100px',width:'75%',margin:'auto'}}>
         <Text>We provide courses along with leading institutions and companies</Text>
         <HStack mt='30px' gap='20px'>
            <Image src="https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160" alt="gooo" w='80px'/>
            <Image src="https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160" alt="" w='80px'/>
            <Image src="https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160" alt="" w='80px'/>
            <Image src="https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160" alt="" w='70px'/>
            <Image src="https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160" alt="" w='80px'/>
         </HStack>
      </div>
      <div style={{width:"100%" ,backgroundColor:"#2B6CB0",color:"white",paddingTop:"15px",paddingLeft:"30px",paddingBottom:'45px'}}>
          <HStack >
             <Box bg='white' p='5' borderRadius='50%'>
                 <Image src="https://lh3.googleusercontent.com/N9jW0_MdICcLbzV1L-JcfAXr5QaadNKtc8HgH-KPixv3J9XaSnjLkru3dZl0dfNYR12hEsDkQM_WMXtXqe_ohTSx96E7gmFHwzpXPubIJlfV3ybeTxks=-rw"  alt="zoom"  />
             </Box>
            <VStack align='flex-start'>
            <Text fontSize='4xl'>Did you know also have webinars?</Text>
            <Text>Online sessions designed to help you develop skills in less than an hour. You can watch webinars live or register to take part in what is coming up.</Text>
            </VStack>
          
            <Button borderRadius='none' bg='white' color='#2B6CB0' p='5'>Explore our webinars</Button>
          </HStack>       
      </div>
      <div>
        <VStack>
        <Text fontSize='4xl'>Do things you never thought possible</Text>
        <Text fontFamily='sans-serif'>Discover courses in topics designed to help expand your career, business and horizons and to upgrade your skills for a new digital world.</Text>
        </VStack>
      </div>
      <div style={{width:'80%',display:'flex',justifyContent:'space-between',gap:'10px',margin:'auto',marginTop:'50px'}}>
        <div className="zoom" style={{width:'30%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px'}}>
            <Image src="https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64"alt=""/>
            <Text fontWeight='bold' fontSize='2xl' mt='6' mb='6'>Digital Marketing</Text>
            <Text>Get Certified free of charge in our 'Fundamentals of digital marketing course or explore other content to help get your buisness online'</Text>
            <ArrowForwardIcon color='#2B6CB0'/>
        </div>
        <div className="zoom" style={{width:'30%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px'}}>
            <Image src="https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64"alt=""/>
            <Text fontWeight='bold' fontSize='2xl' mt='6' mb='6'>Career Devlopment</Text>
            <Text>Gain the skill you need to enhance your career or gain a new job</Text>
            <ArrowForwardIcon color='#2B6CB0'/>
        </div>
        <div className="zoom" style={{width:'30%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:'20px'}}>
            <Image src="https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64"alt=""/>
            <Text fontWeight='bold' fontSize='2xl' mt='6' mb='6'>Data</Text>
            <Text>Demand for workers with specialist data skills hax more than tripled over the last five years</Text>
            <ArrowForwardIcon color='#2B6CB0'/>
        </div>
      </div>
      <div style={{backgroundColor:'#E2E8F0',paddingTop:'70px',paddingBottom:'30px',marginTop:'70px'}}>
         <div style={{width:'70%',display:'flex',margin:'auto',justifyContent:'space-between' ,gap:'30px'}}>
         <div>
            <Image src="https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw" alt="grow"/>
        </div>
        <div>
            <Text>Since 2015, we've trained over 700,000 people, to help them find a job, grow their career or business. Across Britain, local businesses, communities and people are using Google tools and training to thrive. Discover how Google is helping the UK economy to grow. </Text>
            <Button mt='5' border='2px solid blue' borderRadius='0'color='blue' >Explore now</Button>
        </div>
         </div>
      </div>
      <Text fontSize='5xl' mt='10' align='center'>FAQs</Text>
      <div style={{width:'70%',margin:'auto',marginTop:'100px',alignContent:'center'}}>
        <VStack width='100%'>
        <Accrodianfaq/>
        <Button>See all FAQs</Button>
        </VStack>
      </div>
     
    </>
  );
};
export default Home;
