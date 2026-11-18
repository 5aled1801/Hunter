<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {
  Activity,
  Briefcase,
  CheckCircle2,
  Send,
  Mail,
  Search,
  Bot
} from 'lucide-vue-next'

interface HealthState {
  status: string
  app_name: string
  environment: string
  timestamp: string
}

const health = ref<HealthState | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const stats = [
  { name: 'Discovered Jobs', value: '0', icon: Search, change: '+0 today' },
  { name: 'Qualified (>=70%)', value: '0', icon: CheckCircle2, change: 'Ready to review' },
  { name: 'Applications Sent', value: '0', icon: Send, change: '0 today' },
  { name: 'Interviews & Offers', value: '0', icon: Mail, change: '0 active' },
]

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/v1/health')
    health.value = res.data
  } catch (err: any) {
    error.value = 'Backend is currently offline or unreachable'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="space-y-6">
    <!-- Top Welcome Banner -->
    <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-charcoal-700">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Bot class="w-8 h-8 text-accent-gold" />
          Autonomous AI Recruitment Platform
        </h1>
        <p class="text-sm text-gray-400 mt-1">
          Target: Frontend Developer (Vue.js / React / TypeScript) &bull; 2 YOE
        </p>
      </div>

      <!-- System Health Indicator -->
      <div class="mt-4 md:mt-0 flex items-center gap-3 bg-charcoal-800 border border-charcoal-700 px-4 py-2 rounded-lg">
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            :class="health?.status === 'healthy' ? 'bg-accent-green' : 'bg-accent-red'"
          ></span>
          <span
            class="relative inline-flex rounded-full h-3 w-3"
            :class="health?.status === 'healthy' ? 'bg-accent-green' : 'bg-accent-red'"
          ></span>
        </span>
        <div class="text-xs">
          <p class="font-medium text-white">
            Backend API: {{ health?.status === 'healthy' ? 'Connected (v1.0)' : 'Awaiting Connection' }}
          </p>
          <p class="text-gray-400">Environment: {{ health?.environment || 'Development' }}</p>
        </div>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="stat in stats"
        :key="stat.name"
        class="bg-charcoal-800 border border-charcoal-700 rounded-xl p-5 hover:border-charcoal-600 transition"
      >
        <div class="flex items-center justify-between">
          <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">{{ stat.name }}</span>
          <component :is="stat.icon" class="w-5 h-5 text-accent-gold" />
        </div>
        <div class="mt-3 flex items-baseline gap-2">
          <span class="text-3xl font-bold text-white">{{ stat.value }}</span>
          <span class="text-xs text-gray-400">{{ stat.change }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Active Agents Mesh -->
      <div class="lg:col-span-2 bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-semibold text-white flex items-center gap-2">
            <Activity class="w-5 h-5 text-accent-blue" />
            Specialized Autonomous Agents Mesh
          </h2>
          <span class="text-xs text-accent-gold bg-charcoal-700 px-2.5 py-1 rounded-full">12 Agents Defined</span>
        </div>

        <div class="space-y-3">
          <div class="p-3.5 bg-charcoal-900 border border-charcoal-700 rounded-lg flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-accent-green"></div>
              <div>
                <p class="text-sm font-medium text-white">Supervisor Agent</p>
                <p class="text-xs text-gray-400">Orchestrating tasks, rate limits, and scheduling</p>
              </div>
            </div>
            <span class="text-xs font-mono text-gray-400 bg-charcoal-800 px-2 py-0.5 rounded">STANDBY</span>
          </div>

          <div class="p-3.5 bg-charcoal-900 border border-charcoal-700 rounded-lg flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-accent-blue"></div>
              <div>
                <p class="text-sm font-medium text-white">Job Discovery & Source Crawler</p>
                <p class="text-xs text-gray-400">Autonomous search across job platforms & career pages</p>
              </div>
            </div>
            <span class="text-xs font-mono text-gray-400 bg-charcoal-800 px-2 py-0.5 rounded">INITIALIZED</span>
          </div>

          <div class="p-3.5 bg-charcoal-900 border border-charcoal-700 rounded-lg flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-2.5 h-2.5 rounded-full bg-accent-gold"></div>
              <div>
                <p class="text-sm font-medium text-white">AI CV Matching & Cover Letter Synthesizer</p>
                <p class="text-xs text-gray-400">Semantic 0-100 evaluation & dual-template generation</p>
              </div>
            </div>
            <span class="text-xs font-mono text-gray-400 bg-charcoal-800 px-2 py-0.5 rounded">CONFIGURED</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions / Next Milestones -->
      <div class="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h2 class="text-base font-semibold text-white mb-4 flex items-center gap-2">
          <Briefcase class="w-5 h-5 text-accent-gold" />
          Foundation Status
        </h2>
        <div class="space-y-3 text-sm">
          <div class="flex items-center gap-2 text-accent-green">
            <CheckCircle2 class="w-4 h-4" />
            <span>FastAPI Backend Initialized</span>
          </div>
          <div class="flex items-center gap-2 text-accent-green">
            <CheckCircle2 class="w-4 h-4" />
            <span>Vue 3 + TypeScript Frontend Initialized</span>
          </div>
          <div class="flex items-center gap-2 text-accent-green">
            <CheckCircle2 class="w-4 h-4" />
            <span>Tailwind Dark Theme Configured</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <span class="w-4 h-4 rounded-full border border-gray-600 inline-block"></span>
            <span>F02: Authentication & Security Tokens</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <span class="w-4 h-4 rounded-full border border-gray-600 inline-block"></span>
            <span>F03: User Profile & Target Preferences</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
