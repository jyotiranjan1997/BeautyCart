import { Flex, Heading, Center } from "@chakra-ui/react";
import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  return (
    <Center>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Center>
  );
}
