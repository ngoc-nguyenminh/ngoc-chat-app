'use client'; //Nexjt 13, this is server component, so it cannot do interactive, so we need to define it as a client component

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface PageProps {}

const LoginPage: FC<PageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex flex-col items-center max-w-md space-y-8'>
          <div className='flex flex-col items-center gap-8'>
            Logo
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <Button
            isLoading={isLoading}
            type='button'
            className='max-w-sm mx-auto w-full'
            onClick={loginWithGoogle}
          >
            {!isLoading && (
              <Image src='/logo/google.svg' alt='logo' width={24} height={24} />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
