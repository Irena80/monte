<template>
  <section id="kontakt" class="py-24 bg-navy">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left copy -->
        <div class="lg:pt-4">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Kom igång</span>
          <h2 class="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Låt oss planera ert nästa företagsevent.
          </h2>
          <p class="text-blue-100/80 text-lg mb-10 leading-relaxed">
            Fyll i formuläret så återkommer vi med en skräddarsydd offert inom 24 timmar.
          </p>
          <ul class="space-y-4">
            <li v-for="item in perks" :key="item" class="flex items-center gap-3 text-blue-100/80 text-sm">
              <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Form -->
        <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
          <form @submit.prevent="handleSubmit" novalidate>
            <div class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="company" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Företag *</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    required
                    placeholder="Ditt företag"
                    class="w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                    :class="errors.company ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'"
                  />
                  <p v-if="errors.company" class="mt-1 text-xs text-red-500">{{ errors.company }}</p>
                </div>
                <div>
                  <label for="name" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Namn *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Ditt namn"
                    class="w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                    :class="errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'"
                  />
                  <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="email" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">E-post *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="din@epost.se"
                    class="w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                    :class="errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'"
                  />
                  <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
                </div>
                <div>
                  <label for="travelers" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Antal resenärer</label>
                  <select
                    id="travelers"
                    v-model="form.travelers"
                    class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Välj antal</option>
                    <option>8–20 personer</option>
                    <option>20–50 personer</option>
                    <option>50–100 personer</option>
                    <option>100–200 personer</option>
                    <option>200+ personer</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="period" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Önskad reseperiod</label>
                <input
                  id="period"
                  v-model="form.period"
                  type="text"
                  placeholder="t.ex. September 2025"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              <div>
                <label for="message" class="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Meddelande</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Berätta om ert event, önskemål eller frågor..."
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                :disabled="submitted"
                class="w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                :class="submitted
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-amber-500 hover:bg-amber-600 text-white hover:shadow-amber-500/30 hover:shadow-xl active:scale-[0.98]'"
              >
                <span v-if="!submitted">Begär offert</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  Tack! Vi hör av oss inom 24h.
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  company: string;
  name: string;
  email: string;
  travelers: string;
  period: string;
  message: string;
}

const form = reactive<FormData>({
  company: '',
  name: '',
  email: '',
  travelers: '',
  period: '',
  message: '',
});

const errors = reactive<Partial<FormData>>({});
const submitted = ref(false);

function validate(): boolean {
  Object.keys(errors).forEach((k) => delete (errors as Record<string, string>)[k]);

  if (!form.company.trim()) errors.company = 'Obligatoriskt fält';
  if (!form.name.trim()) errors.name = 'Obligatoriskt fält';
  if (!form.email.trim()) {
    errors.email = 'Obligatoriskt fält';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ange en giltig e-postadress';
  }

  return Object.keys(errors).length === 0;
}

function handleSubmit() {
  if (!validate()) return;

  // Here you would integrate with your backend / Netlify Forms / etc.
  submitted.value = true;
}

const perks = [
  'Svar inom 24 timmar',
  'Ingen förpliktelse – helt gratis konsultation',
  'Skräddarsydd offert för er grupp',
  'Svenska projektledare',
];
</script>

<style scoped>
.bg-navy {
  background-color: #0B3C5D;
}
.text-navy {
  color: #0B3C5D;
}
</style>
