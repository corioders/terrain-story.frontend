<template>
	<IndoorMap v-if="isIndoorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<OutdoorMapWrapper v-if="isOutdoorMap" :locationID="locationID" />
	<div v-if="!isIndoorMap && !isOutdoorMap" class="error">
		<h2 v-if="!isUA.value">Ooopppss! Przykro nam nie znaleźliśmy odpowiedniej mapy.</h2>
		<h2 v-else>Ооопппссс! На жаль, ми не знайшли підходящої карти.</h2>

		<p v-if="!isUA.value">Prosimy zgłoś błąd a pomoże nam to dopracować grę. Wybierz proszę kategorię "Kod QR nie działa", a lokalizację wpisz samodzielnie.</p>
		<p v-else>Будь ласка, повідомте про помилку, і це допоможе нам покращити гру. Виберіть категорію «QR-код не працює» та введіть місце розташування самостійно.</p>

		<PrimaryButton @click="$router.push('/zglos-blad')">
			<template v-if="!isUA.value">Zgłoś błąd</template>
			<template v-else>Повідом про помилку</template>
		</PrimaryButton>
	</div>
</template>

<script lang="ts">
import OutdoorMapWrapper from '@help/components/map/OutdoorMapWrapper.vue';
import { useMainStore } from '@help/store/main';
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import IndoorMap from '@/components/map/indoor/IndoorMap.vue';
import { getLocationID, hasLocationID, isIndoorMap, isOutdoorMap } from '@/router';
import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		IndoorMap,
		OutdoorMapWrapper,
		PrimaryButton,
	},
	setup() {
		const progressStore = useProgressStore();
		const mainStore = useMainStore();
		const router = useRouter();

		let locationID = null;
		if (hasLocationID(router)) locationID = getLocationID(router);

		return {
			puzzlesDone: progressStore.puzzles,
			gameName: mainStore.gameName,

			locationID,
			isIndoorMap: isIndoorMap(router),
			isOutdoorMap: isOutdoorMap(router),
		};
	},
});
</script>
<style lang="scss" scoped>
.error {
	width: 95%;
	max-width: 950px;
}
</style>
