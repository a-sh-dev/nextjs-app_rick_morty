import { FormControl, FormLabel, Input } from '@chakra-ui/react'

interface FormInputProps {
  name: string
  value: string
  label: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  name,
  value,
  label,
  placeholder,
  onChange,
}: FormInputProps) => {
  return (
    <FormControl mb={6} isRequired>
      <FormLabel textAlign="center">{label}</FormLabel>
      <Input
        type="text"
        variant="filled"
        size="lg"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormControl>
  )
}

export default FormInput
