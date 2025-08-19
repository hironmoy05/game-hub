import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText)

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      if (ref.current) setSearchText(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} value={ref.current?.value} placeholder='Search games...' borderRadius={20} variant='filled' />
      </InputGroup>
    </form>
  )
}

export default SearchInput