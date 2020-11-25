import { Flex, Avatar, Text, AvatarBadge } from '@chakra-ui/react'
import React from 'react'

import { Container } from './styles'
import { useAuth } from '../../contexts/AuthContext'

const Profile: React.FC = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Avatar
        name={user.first_name + ' ' + user.last_name}
        width="35px"
        height="35px"
      >
        <AvatarBadge
          size="14px"
          bottom="2px"
          right="2px"
          bg="green.500"
          border="1px"
          borderColor="gray.200"
        />
      </Avatar>
      <Flex flex="1" flexDir="column" mx="10px" pt="5px">
        <Text lineHeight="1" fontSize="12px" fontWeight="bold" color="gray.700">
          {user.first_name + ' ' + user.last_name}
        </Text>
        <Text fontSize="11px" color="#777777">
          Online
        </Text>
      </Flex>
      <Flex flexDir="column">
        <button type="button" onClick={logout}>
          Logout
        </button>
      </Flex>
    </Container>
  )
}

export default Profile
