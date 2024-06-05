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
  isModal?: boolean
}

const CharacterImg = ({ src, alt, isModal }: CharacterImgProps) => {
  const boxSize = isModal
    ? { base: '350px', lg: '200px' }
    : { base: '140px', sm: '150px', lg: '160px' }

  const sizes = isModal ? '350px' : '150px'

  return (
    <Flex position="relative" borderRadius={6} boxSize={boxSize} mb={2}>
      <Image src={src} alt={alt} sizes={sizes} fill />
    </Flex>
  )
}

export const CharacterCard = ({
  id,
  name,
  image,
  status,
  species,
  type,
  gender,
  origin,
}: CharacterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const keyFontSize = { base: 'medium', sm: 'xx-small' }
  const valueFontSize = { base: 'large', sm: 'medium' }

  return (
    <>
      <Card
        key={id}
        maxW="sm"
        rounded="md"
        shadow="lg"
        _hover={{ shadow: 'sm', bg: 'gray.100' }}
        onClick={onOpen}
      >
        <CardBody>
          <VStack>
            <CharacterImg src={image} alt={name} />
            <Heading size="sm" fontWeight="semibold" textAlign="center">
              {name}
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
            <Heading>{name}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <CharacterImg src={image} alt={name} isModal />
              <Stack ml={{ base: '', sm: '6' }}>
                <Text
                  casing="uppercase"
                  fontSize={keyFontSize}
                  letterSpacing={2}
                >
                  Species/Type
                </Text>
                <Text fontSize={valueFontSize}>
                  {species}
                  {type && <Text as="span">{`, ${type}`}</Text>}
                </Text>

                <Text casing="uppercase" fontSize="xx-small" letterSpacing={2}>
                  Gender
                </Text>
                <Text fontSize={valueFontSize}>{gender}</Text>

                <Text
                  casing="uppercase"
                  fontSize={keyFontSize}
                  letterSpacing={2}
                >
                  Origin
                </Text>
                <Text fontSize={valueFontSize}>{origin}</Text>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Tag>Status: {status}</Tag>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
