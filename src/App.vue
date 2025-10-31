<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="w-400">
      <Tabs class="w-[400px]" default-value="account">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account"> Account </TabsTrigger>
          <TabsTrigger value="password"> Password </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">Name-Name</div>
              <div class="space-y-1">Username-Username</div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">Current password-Current password</div>
              <div class="space-y-1">New password-New password</div>
            </CardContent>
            <CardFooter> Save password </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>
