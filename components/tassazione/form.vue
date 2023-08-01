<template>
  <div>
    <div class="grid xl:grid-cols-4 gap-5">
      <div class="xl:col-span-2">
        <BaseInput v-model="dati.totaleFattura" :validation="[
          [(text: string) => Number(text) > 100000000, 'inserire un numero inferiore a 100.000.000'],
          [(text: string) => Number(text) < 0, 'Inserire un numero maggiore di 0']
        ]" type="number" placeholder="10000" label="Totale fattura" name="prezzo" id="prezzo"
          help="Inserisci il prezzo totale della fattura." />
      </div>
      <div class="xl:col-span-2">
        <BaseInput v-model="dati.totaleVoluto" label="Totale voluto" name="prezzo_da_ottenere"
          id="prezzo_da_ottenere" help="Inserisci il prezzo che vuoi ottenere." />
      </div>
      <div class="flex flex-col gap-2 ">
        <label for="coefficiente">Coefficiente di redditività</label>
        <select v-model="dati.coefficiente"
          class="text-gray-900 border rounded-lg border-gray-900 dark:border-gray-50 px-4 py-2"
          label="coefficienti di redditività" name="coefficiente" id="coefficiente">
          <option value="40">40</option>
          <option value="86">86</option>
          <option value="78">78</option>
        </select>
      </div>

      <div class="flex flex-col gap-2">
        <label for="coefficiente">Tassazione percentuale</label>
        <select v-model="dati.tassazione"
          class="text-gray-900 border rounded-lg border-gray-900 dark:border-gray-50 px-4 py-2"
          label="coefficienti di redditività" name="coefficiente" id="tassazione">
          <option value="5">5</option>
          <option value="15">15</option>
        </select>
      </div>

      <div class="flex flex-col gap-2 xl:col-span-2">
        <BaseInput v-model="dati.contributi" label="Contributi vesati anno precedente" name="contributi" id="contributi" />
      </div>

      <div class="xl:col-span-4">
        <p>
          Sul reddito imponibile di <b>{{ imponibile }}€</b> sottraendo il <b>{{ dati.tassazione }}%</b> ed i <b>{{ dati.contributi }}€</b> versati, si ha un totale
          di <b>{{ ~~imposteTotale }}€</b> da versare
        </p>
        
      </div>
      <div class="xl:col-span-4">
        <p>
         Contributi Inps ammontano al 26.23% dell'imponibile <b>{{ imponibile }}€</b> per un totale di <b> {{ Number(imponibile) * 26.23 / 100 }}€</b>
        </p>
        
      </div>

      <div class="xl:col-span-4">
        Su <b>{{ dati.totaleFattura }}€</b> togliendo <b>{{ ~~imposteTotale }}€</b> di imposte e <b>{{ imponibile * 26.23 / 100 }}€</b> di inps rimangono <b> {{ Number(dati.totaleFattura) - Number(imposteTotale) - (imponibile * 26.23 / 100) }}€ </b> <br/>
        Quindi un totale di <b>{{tasseTotale}}€</b> di tasse
      </div>

    </div>
  </div>
</template>



<script setup lang="ts">

const dati = reactive({
  totaleFattura: '30000',
  totaleVoluto: '',
  coefficiente: 78,
  tassazione: 5,
  contributi: 0
})


const toast = useToast()


const imponibile = computed(() => {
  const { totaleFattura, coefficiente } = dati;
  return (Number(totaleFattura) * coefficiente / 100) ;
})
const tasse = computed(() => {
  const { tassazione } = dati;
  return imponibile.value - (imponibile.value * Number(tassazione) / 100) 
})

const tasseTotale = computed(() => {
  const tot = Number( dati.totaleFattura) - (Number(dati.totaleFattura) - imposteTotale.value - (Number(imponibile.value) * 26.23 / 100));
  return tot > 0 ? Number(tot.toFixed(2)) : 0
})

const imposteTotale = computed(() => {
  const tot = Number(imponibile.value) - tasse.value - dati.contributi;

  return tot > 0 ? Number(tot.toFixed(2)) : 0 
})
</script>