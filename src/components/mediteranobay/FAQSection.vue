<template>
  <section id="faq" class="py-24 bg-white">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4">Vanliga frågor</span>
        <h2 class="text-4xl font-bold text-navy tracking-tight">Allt du behöver veta</h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300"
          :class="open === index ? 'shadow-md' : ''"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between px-7 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            :aria-expanded="open === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <span class="text-base font-semibold text-navy pr-4">{{ item.question }}</span>
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :class="open === index ? 'bg-amber-500 rotate-45' : 'bg-gray-100'"
            >
              <svg class="w-4 h-4" :class="open === index ? 'text-white' : 'text-navy'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>

          <div
            :id="`faq-answer-${index}`"
            role="region"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="open === index ? { maxHeight: '500px', opacity: 1 } : { maxHeight: '0px', opacity: 0 }"
          >
            <p class="px-7 pb-6 text-gray-600 leading-relaxed text-sm">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref<number | null>(0);

function toggle(index: number) {
  open.value = open.value === index ? null : index;
}

const faqs = [
  {
    question: 'Varför Montenegro?',
    answer:
      'Montenegro erbjuder en unik kombination av naturskön Adriatisk kustlinje, imponerande fjällmiljö och en snabbt växande infrastruktur för affärsresor. Landet är säkert, enkelt att ta sig till från Sverige (2–3 timmars flyg), och erbjuder ett exceptionellt värde jämfört med södra Europa. Perfekt för företag som vill ha något lite annorlunda och minnesvärt.',
  },
  {
    question: 'Vad kostar det?',
    answer:
      'Priserna varierar beroende på paket, antal deltagare och önskad standard. Executive Escape startar från 9 900 kr/person för 3 dagar, Team & Culture Retreat från 11 900 kr/person för 4 dagar. Premium Company Offsite är skräddarsytt – kontakta oss för offert. Priset inkluderar normalt boende, aktiviteter, transfer och lokalt koordinationsarbete.',
  },
  {
    question: 'Kan resan anpassas efter våra behov?',
    answer:
      'Absolut. Alla våra paket är en utgångspunkt – vi skräddarsyr varje del baserat på era mål, teamets storlek och budget. Oavsett om ni vill ha fokus på workshops, team building, konferens, natur eller kombinationer av allt – vi bygger ett program precis för er.',
  },
  {
    question: 'Vad ingår i paketen?',
    answer:
      'Standardpaketen inkluderar flygtransfer, boende på utvalda hotell, frukost, utvalda aktiviteter och lokal koordination. Tillägg som konferenslokaler, teambuilding-arrangemang, galamiddagar, båtturer eller privata transfers kan läggas till. En detaljerad itinerary tas fram specifikt för er grupp.',
  },
  {
    question: 'Hur långt i förväg behöver vi boka?',
    answer:
      'Vi rekommenderar att boka 6–12 veckor i förväg för att säkra önskade datum, hotell och aktiviteter – särskilt under högsäsong (juni–september). Det är dock möjligt att planera resor med kortare ledtid. Kontakta oss så berättar vi vad som är möjligt för er.',
  },
];
</script>

<style scoped>
.text-navy {
  color: #0B3C5D;
}
</style>
