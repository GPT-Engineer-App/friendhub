import React from "react";
import { Box, Container, VStack, HStack, Text, Input, IconButton, Avatar, Image, Divider, Flex, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaSearch, FaHome, FaUserFriends, FaVideo, FaBell, FaUserCircle, FaPlus, FaFacebookMessenger, FaSmile } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="blue.600" color="white" p={4}>
        <HStack spacing={4} justify="space-between">
          <HStack spacing={4}>
            <FaFacebook size="2em" />
            <HStack spacing={2} bg="white" color="black" p={2} borderRadius="md">
              <FaSearch />
              <Input variant="unstyled" placeholder="Search Facebook" />
            </HStack>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
            <IconButton aria-label="Friends" icon={<FaUserFriends />} size="lg" variant="ghost" />
            <IconButton aria-label="Watch" icon={<FaVideo />} size="lg" variant="ghost" />
            <IconButton aria-label="Marketplace" icon={<FaBell />} size="lg" variant="ghost" />
            <IconButton aria-label="Groups" icon={<FaUserCircle />} size="lg" variant="ghost" />
          </HStack>
          <HStack spacing={4}>
            <Avatar name="User Name" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzM3MDc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>User Name</Text>
            <IconButton aria-label="Add" icon={<FaPlus />} size="lg" variant="ghost" />
            <IconButton aria-label="Messenger" icon={<FaFacebookMessenger />} size="lg" variant="ghost" />
            <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" variant="ghost" />
          </HStack>
        </HStack>
      </Box>

      {/* Main Content */}
      <Flex>
        {/* Left Sidebar */}
        <VStack w="20%" p={4} spacing={4} align="flex-start">
          <HStack>
            <Avatar name="User Name" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzM3MDc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>User Name</Text>
          </HStack>
          <HStack>
            <FaUserFriends />
            <Text>Friends</Text>
          </HStack>
          <HStack>
            <FaFacebookMessenger />
            <Text>Messenger</Text>
          </HStack>
          <HStack>
            <FaVideo />
            <Text>Watch</Text>
          </HStack>
          <HStack>
            <FaBell />
            <Text>Notifications</Text>
          </HStack>
        </VStack>

        {/* Feed */}
        <VStack w="60%" p={4} spacing={4}>
          <Box w="100%" p={4} bg="white" borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Avatar name="User Name" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzM3MDc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Input variant="filled" placeholder="What's on your mind?" />
            </HStack>
            <Divider my={4} />
            <HStack justify="space-between">
              <HStack>
                <FaVideo color="red" />
                <Text>Live Video</Text>
              </HStack>
              <HStack>
                <FaUserFriends color="green" />
                <Text>Photo/Video</Text>
              </HStack>
              <HStack>
                <FaSmile color="yellow" />
                <Text>Feeling/Activity</Text>
              </HStack>
            </HStack>
          </Box>

          {/* Example Post */}
          <Box w="100%" p={4} bg="white" borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Avatar name="Friend Name" src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmllbmQlMjBhdmF0YXJ8ZW58MHx8fHwxNzE3NDE1Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="bold">Friend Name</Text>
                <Text fontSize="sm" color="gray.500">
                  2 hrs ago
                </Text>
              </VStack>
            </HStack>
            <Text mt={4}>This is an example post content.</Text>
            <Image src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3N0JTIwaW1hZ2V8ZW58MHx8fHwxNzE3NDE1Mzc4fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} borderRadius="md" />
          </Box>
        </VStack>

        {/* Right Sidebar */}
        <VStack w="20%" p={4} spacing={4} align="flex-start">
          <Text fontWeight="bold">Sponsored</Text>
          <Image src="https://images.unsplash.com/photo-1593054349355-a43456241ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9uc29yZWQlMjBhZHxlbnwwfHx8fDE3MTc0MTUzNzh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1519677704001-6d410c3ef07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzcG9uc29yZWQlMjBhZHxlbnwwfHx8fDE3MTc0MTUzNzh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Spacer />
          <Text fontWeight="bold">Contacts</Text>
          <HStack>
            <Avatar name="Contact Name" src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwYXZhdGFyfGVufDB8fHx8MTcxNzQxNTM3OHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>Contact Name</Text>
          </HStack>
          <HStack>
            <Avatar name="Contact Name" src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjb250YWN0JTIwYXZhdGFyfGVufDB8fHx8MTcxNzQxNTM3OHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text>Contact Name</Text>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
