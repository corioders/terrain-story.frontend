<template>
	<VFlex v-if="showForm" gap="12px" class="VFlex">
		<h2>Zgłoś błąd</h2>
		<div>
			<span>Wybierz typ błędu</span>
			<VDropdown v-model="selectedBugType" :options="bugTypes" />
		</div>
		<VInput v-if="selectedBugType === 'Brak kodu QR'" v-model="data" name="W jakim miejscu nie ma kodu?" />
		<VInput v-else-if="selectedBugType === 'Kod QR nie działa'" v-model="data" name="W jakim miejscu kod nie działa?" />
		<div v-else-if="selectedBugType === 'Błąd w grze' || selectedBugType === 'Inny błąd'">
			<label for="reportBugTextArea">Opisz błąd</label>
			<textarea id="reportBugTextArea" v-model="data" name="reportBugTextArea" />
		</div>
		<PrimaryButton v-if="selectedBugType !== '' && data !== ''" @click="submitBug">Wyślij</PrimaryButton>
	</VFlex>
	<VFlex v-else gap="12px">
		<h2>Dziękujemy za zgłoszenie błędu</h2>
		<PrimaryButton @click="showForm = true">Zgłoś następny błąd</PrimaryButton>
	</VFlex>
</template>

<script lang="ts">
import { VFlex, VDropdown, VInput } from '@corioders/vueui';
import { defineComponent, ref, watch } from 'vue';

import { PrimaryButton } from '@/theme/Button';

import { submitBug as firebaseSubmitBug } from './firebase';

export default defineComponent({
	name: 'ReportBug',
	components: {
		VFlex,
		VDropdown,
		VInput,
		PrimaryButton,
	},
	setup() {
		const bugTypes = ['Brak kodu QR', 'Kod QR nie działa', 'Inny błąd'];
		const selectedBugType = ref('');

		const data = ref('');

		const showForm = ref(true);

		async function submitBug(): Promise<void> {
			if (selectedBugType.value === '' || data.value === '') return;

			await firebaseSubmitBug(`Bug type: ${selectedBugType.value}\nUser message: ${data.value}`);

			selectedBugType.value = '';
			data.value = '';
			showForm.value = false;
		}

		watch(selectedBugType, () => {
			data.value = '';
		});

		return { bugTypes, selectedBugType, data, submitBug, showForm };
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

.VFlex {
	width: 100%;
	max-width: 550px;
	padding: 0 12px;

	h2 {
		font-weight: 500;
		text-align: center;
		font-size: 1.5rem;
	}

	span {
		font-size: 1rem;
		margin-left: 1em;
	}

	div {
		width: 100%;

		label {
			margin-left: 4px;
		}

		textarea {
			resize: vertical;
			width: 100%;
			font-size: 1.2rem;
			min-height: 150px;
			caret-color: colors.$primaryDarker;
			border: colors.$disabled solid 2px;
			border-radius: 5px;
			padding: 4px;

			&:focus {
				outline: none;
				border-color: colors.$primaryDarker;
			}
		}
	}
}
</style>
