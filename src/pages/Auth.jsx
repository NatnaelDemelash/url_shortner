import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="mt-24 flex flex-col items-center gap-2">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get('createNew')
          ? 'You should Login first'
          : 'Login/Signup'}
      </h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="w-full grid grid-cols-2 mt-4">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">Login Component</TabsContent>
        <TabsContent value="signup">Signup Component</TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
