<template>
	<Flex>
		<section>
			<h2>Jak grać?</h2>
			<p>
				"Poszukiwacze CAMienia" to gra terenowa, która pozwala przeżyć niesamowitą przygodę, zachęca do aktywnego spędzenia czasu. Uczestnicy stawiają czoła ukrytym na
				terenie Katowic- Śródmieścia wskazówkom i za pomocą kodów QR szukają magicznego camienia. Uczestnicy, poruszają się na trasie wyznaczonej kodami QR tj kwadratowy
				kod graficzny w kształcie kwadratu, na którym znajdują się czarne i białe kwadraty. Kod QR należy zeskanować przy pomocy smartfonu. Do zeskanowania kodu może być
				potrzebna specjalna aplikacja. Zeskanowanie kodu spowoduje włączenie strony internetowej stworzonej specjalnie do gry – strona ta nie zawiera reklam a jej
				stosowanie jest bezpieczne. Każdy kodu QR zapewni dostęp do zagadki, której integralną częścią są filmiki. Po rozwiązaniu zagadki pojawi się mapa z
				umiejscowieniem kolejnego kodu. Do zeskanowania i odnalezienia w jest w sumie 8 kodów umieszczonych w ścisłym centrum dzielnicy Śródmieście. Premiera gry odbędzie
				się 05.11.2021 o godzinie 10.00. Tego dnia na wszystkich, którzy dotrą do finału czekają atrakcje i nagrody. Więcej informacji w regulaminie
			</p>
			<n-button type="info" @click="$router.push('/')"> Wróć do strony głównej </n-button>
		</section>
	</Flex>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { Flex } from '@corioders/vueui';

	export default defineComponent({
		name: 'HowToPlay',
		components: { Flex, NButton },
	});
</script>
<style lang="scss" scoped>
	section {
		width: 95%;
		max-width: 950px;
	}
</style>
