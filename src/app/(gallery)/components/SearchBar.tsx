'use client';

import { TextField } from '@mui/material';
import { useSearchParams } from 'next/navigation';


export default function SearchBar() {
//   const router = useRouter();
  const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();
  //    
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const value = e.target.value;
    //  
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    // startTransition(() => {
    //   router.push(`?${params.toString()}`);
    // });
  };
   
  //   
  return (
    <TextField
      sx={{color:"white",borderColor:'white', background:"white"}}
      label="Search images"
      variant="outlined"
      size="small"
      defaultValue={searchParams.get('search') || ''}
      onChange={handleSearchChange}
      disabled={isPending}
    />
  );
}
