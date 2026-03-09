<script setup>
definePageMeta({
  layout: "authentication"
});
useHead({
  title: "Login"
})
</script>

<template>
  <div class="w-full border border-zinc-300 p-8 rounded-md shadow-sm bg-white">
    <h1 class="text-2xl font-semibold text-left text-zinc-600 mb-6">
      Assign account
    </h1>

    <form class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-zinc-400">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          class="px-4 py-2.5 rounded-md bg-zinc-50 border border-zinc-300 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-zinc-400">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          class="px-4 py-2.5 rounded-md bg-zinc-50 border border-zinc-300 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div class="flex items-start gap-3 text-sm text-zinc-400">
        <input
          type="checkbox"
          class="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-zinc-900 text-emerald-500 focus:ring-emerald-500"
        />
        <span>
          Remember me
        </span>
      </div>

      <button
        type="submit"
        class="w-full py-2.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition"
      >
        Login
      </button>

      <p class="text-sm text-center text-zinc-400">
        Don't have an account?
        <NuxtLink to="/auth/register" class="text-emerald-500 hover:underline">
          Register
        </NuxtLink>
      </p>

    </form>
  </div>
</template>
