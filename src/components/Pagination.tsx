import { Center, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { RoundedButton } from './RoundedButton'

interface PaginationProps {
  currentPage: number
  totalPages: number
  pageLimitPerSet: number
  charactersCountPerPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalPages,
  pageLimitPerSet,
  onPageChange,
}: PaginationProps) => {
  const maxDisplayedPages = Math.min(pageLimitPerSet, totalPages)
  const pageSetStart =
    Math.floor((currentPage - 1) / maxDisplayedPages) * maxDisplayedPages + 1
  const pageSetEnd = Math.min(pageSetStart + maxDisplayedPages - 1, totalPages)

  const handlePrevSet = () => {
    if (pageSetStart > maxDisplayedPages) {
      onPageChange(pageSetStart - maxDisplayedPages)
    }
  }

  const handleNextSet = () => {
    if (pageSetEnd < totalPages) {
      onPageChange(pageSetEnd + 1)
    }
  }

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <Center my={4}>
      <HStack spacing={2}>
        <RoundedButton isDisabled={pageSetStart === 1} onClick={handlePrevSet}>
          {`Prev ${pageLimitPerSet}`}
        </RoundedButton>
        {Array.from({ length: pageSetEnd - pageSetStart + 1 }, (_, i) => {
          const pageNum = pageSetStart + i
          const isCurrentPage = currentPage === pageNum
          return (
            <Link href={`${pageNum}`} key={pageNum}>
              <RoundedButton
                cursor={isCurrentPage ? 'default' : ''}
                variant={isCurrentPage ? 'solid' : 'outline'}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </RoundedButton>
            </Link>
          )
        })}
        <RoundedButton
          isDisabled={pageSetEnd === totalPages}
          onClick={handleNextSet}
        >
          {`Next ${pageLimitPerSet}`}
        </RoundedButton>
      </HStack>
    </Center>
  )
}
