<template>
	<VFlex gap="12px" class="VFlex">
		<h2>Zgłoś błąd</h2>
		<div>
			<label for="reportBugTextArea">Opisz błąd</label>
			<textarea id="reportBugTextArea" v-model="textareaContent" name="reportBugTextArea" />
		</div>
		<PrimaryButton @click="submitBug">Wyślij</PrimaryButton>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import { PrimaryButton } from '@/theme/Button';
	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'ReportBug',
		components: {
			VFlex,
			PrimaryButton,
		},
		setup() {
			const textareaContent = ref('');

			function submitBug(): void {
				if (textareaContent.value === '') return;
				console.log('submit');
				console.log(textareaContent.value);
			}

			return { textareaContent, submitBug };
		},
	});
</script>
<style lang="scss" scoped>
	.VFlex {
		width: 100%;
		max-width: 950px;
		padding: 0 12px;
		h2 {
			font-weight: 500;
			text-align: center;
			font-size: 1.5rem;
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
				caret-color: $primaryDarker;
				border: $disabled solid 2px;
				border-radius: 5px;
				padding: 4px;
				&:focus {
					outline: none;
					border-color: $primaryDarker;
				}
			}
		}
	}
</style>
