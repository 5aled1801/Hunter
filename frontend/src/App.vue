<script setup lang="ts">
import {
  LayoutDashboard,
  Search,
  FileText,
  Mail,
  Building2,
  Bell,
  Cpu,
  Settings,
  ShieldCheck
} from 'lucide-vue-next'

const navItems = [
  { name: 'Overview', to: '/', icon: LayoutDashboard },
  { name: 'Job Discovery', to: '/jobs', icon: Search },
  { name: 'CV & Cover Letters', to: '/documents', icon: FileText },
  { name: 'Applications & Kanban', to: '/applications', icon: Building2 },
  { name: 'Gmail & Communication', to: '/email', icon: Mail },
  { name: 'Discord Alerts', to: '/discord', icon: Bell },
  { name: 'Agent Mesh', to: '/agents', icon: Cpu },
  { name: 'Security & Access', to: '/security', icon: ShieldCheck },
  { name: 'Settings', to: '/settings', icon: Settings },
]
</script>

<template>
  <div class="min-h-screen bg-charcoal-900 flex text-gray-200">
    <!-- Sidebar -->
    <aside class="w-64 bg-charcoal-800 border-r border-charcoal-700 flex flex-col justify-between hidden md:flex">
      <div>
        <!-- Logo -->
        <div class="p-6 border-b border-charcoal-700 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">
            JH
          </div>
          <div>
            <span class="font-bold text-base text-white tracking-wide">JobHunter AI</span>
            <span class="block text-[10px] text-accent-gold tracking-widest uppercase font-mono">Autonomous</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="p-4 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition text-gray-400 hover:text-white hover:bg-charcoal-700"
            active-class="bg-charcoal-700 text-accent-gold font-semibold"
          >
            <component :is="item.icon" class="w-4 h-4" />
            {{ item.name }}
          </router-link>
        </nav>
      </div>

      <!-- User Profile Snippet in Sidebar -->
      <div class="p-4 border-t border-charcoal-700">
        <div class="flex items-center gap-3 p-2 rounded-lg bg-charcoal-900/60 border border-charcoal-700">
          <div class="w-9 h-9 rounded-full bg-charcoal-700 border border-accent-gold/30 flex items-center justify-center text-accent-gold font-semibold text-sm">
            KH
          </div>
          <div class="overflow-hidden">
            <p class="text-xs font-semibold text-white truncate">Khaled Hassan</p>
            <p class="text-[11px] text-gray-400 truncate">Frontend Engineer</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <main class="flex-1 p-6 md:p-8 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
