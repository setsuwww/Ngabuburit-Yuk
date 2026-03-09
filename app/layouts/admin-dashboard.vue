<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      :class="{ 'translate-x-0': sidebarOpen }"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-100">
        <!-- Logo -->
        <div class="flex items-center justify-center mb-8 mt-2">
          <div class="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <span class="ml-3 text-xl font-semibold text-gray-800">AdminPanel</span>
        </div>

        <!-- Navigation -->
        <nav class="space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="flex items-center px-4 py-3 text-gray-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200 group"
            active-class="bg-emerald-50 text-emerald-600 font-medium"
          >
            <Icon :name="item.icon" class="w-5 h-5 mr-3" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </nav>

        <!-- User Profile -->
        <div class="absolute bottom-4 left-3 right-3">
          <div class="flex items-center p-3 bg-gray-50 rounded-xl">
            <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <span class="text-emerald-600 font-medium">JD</span>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700">John Doe</p>
              <p class="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="sm:ml-64 min-h-screen">
      <!-- Header -->
      <header class="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div class="flex items-center justify-between px-6 py-4">
          <!-- Left side -->
          <div class="flex items-center">
            <!-- Mobile menu button -->
            <button
              @click="sidebarOpen = !sidebarOpen"
              class="p-2 mr-4 text-gray-500 rounded-lg hover:bg-gray-100 sm:hidden"
            >
              <Icon name="heroicons:bars-3" class="w-6 h-6" />
            </button>

            <!-- Search -->
            <div class="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2">
              <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                class="bg-transparent border-none focus:outline-none text-sm text-gray-600 placeholder-gray-400"
              >
            </div>
          </div>

          <!-- Right side -->
          <div class="flex items-center space-x-3">
            <!-- Notification -->
            <button class="p-2 text-gray-500 hover:bg-gray-50 rounded-xl relative">
              <Icon name="heroicons:bell" class="w-5 h-5" />
              <span class="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            <!-- Message -->
            <button class="p-2 text-gray-500 hover:bg-gray-50 rounded-xl relative">
              <Icon name="heroicons:envelope" class="w-5 h-5" />
              <span class="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            <!-- Divider -->
            <div class="w-px h-6 bg-gray-200"></div>

            <!-- Profile dropdown -->
            <div class="relative">
              <button @click="profileOpen = !profileOpen" class="flex items-center space-x-2">
                <div class="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <span class="text-emerald-600 font-medium">JD</span>
                </div>
                <Icon name="heroicons:chevron-down" class="w-4 h-4 text-gray-400" />
              </button>

              <!-- Dropdown menu -->
              <div
                v-if="profileOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1"
              >
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Settings</a>
                <hr class="my-1 border-gray-100">
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="p-6">
        <!-- Page Title -->
        <div class="mb-6">
          <h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p class="text-sm text-gray-500 mt-1">Welcome back, John! Here's what's happening with your store today.</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div v-for="stat in stats" :key="stat.label" class="bg-white p-5 rounded-2xl border border-gray-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-500">{{ stat.label }}</p>
                <p class="text-xl font-semibold text-gray-800 mt-1">{{ stat.value }}</p>
              </div>
              <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Icon :name="stat.icon" class="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        <!-- Slot for dynamic content -->
        <div class="bg-white rounded-2xl border border-gray-100 p-6">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(false)
const profileOpen = ref(false)

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: 'heroicons:home' },
  { name: 'Analytics', path: '/admin/analytics', icon: 'heroicons:chart-bar' },
  { name: 'Products', path: '/admin/products', icon: 'heroicons:cube' },
  { name: 'Orders', path: '/admin/orders', icon: 'heroicons:shopping-cart' },
  { name: 'Customers', path: '/admin/customers', icon: 'heroicons:users' },
  { name: 'Settings', path: '/admin/settings', icon: 'heroicons:cog-6-tooth' },
]

const stats = ref([
  { label: 'Total Revenue', value: '$54,239', icon: 'heroicons:currency-dollar' },
  { label: 'Total Orders', value: '1,342', icon: 'heroicons:shopping-bag' },
  { label: 'New Customers', value: '189', icon: 'heroicons:user-group' },
  { label: 'Conversion Rate', value: '3.24%', icon: 'heroicons:trending-up' },
])

// Click outside to close dropdown
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      profileOpen.value = false
    }
  })
})
</script>

<style scoped>
/* Custom scrollbar for sidebar */
aside::-webkit-scrollbar {
  width: 4px;
}

aside::-webkit-scrollbar-track {
  background: #f1f1f1;
}

aside::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 4px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: #059669;
}
</style>
