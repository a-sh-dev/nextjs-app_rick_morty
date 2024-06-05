'use client'

import { CharactersDataDisplayType } from '@/utils/convertDataForDisplay'
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

type CharacterProps = CharactersDataDisplayType['characters'][0]
type CharacterImgProps = {
  src: string
  alt: string
}

const CharacterImg = ({ src, alt }: CharacterImgProps) => {
  return (
    <Flex
      position="relative"
      rounded="md"
      boxSize={{ base: '140px', sm: '150px', lg: '160px' }}
      mb={2}
    >
      <Image src={src} alt={alt} sizes="150px" fill />
    </Flex>
  )
}

export const CharacterCard = (character: CharacterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card
        key={character.id}
        maxW="sm"
        rounded="md"
        shadow="lg"
        _hover={{ shadow: 'sm', bg: 'gray.100' }}
        onClick={onOpen}
      >
        <CardBody>
          <VStack>
            <CharacterImg src={character.image} alt={character.name} />
            <Heading size="sm" fontWeight="semibold" textAlign="center">
              {character.name}
            </Heading>
          </VStack>
        </CardBody>
      </Card>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={{ base: 'full', sm: 'md' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>{character.name}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <CharacterImg src={character.image} alt={character.name} />
              <Stack ml={6}>
                <Text casing="uppercase" fontSize="xx-small" letterSpacing={2}>
                  Species/Type
                </Text>
                <Text>
                  {character.species}
                  {character.type && (
                    <Text as="span">{`, ${character.type}`}</Text>
                  )}
                </Text>

                <Text casing="uppercase" fontSize="xx-small" letterSpacing={2}>
                  Gender
                </Text>
                <Text>{character.gender}</Text>
                <Text casing="uppercase" fontSize="xx-small" letterSpacing={2}>
                  Origin
                </Text>
                <Text>{character.origin}</Text>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Tag>Status: {character.status}</Tag>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
