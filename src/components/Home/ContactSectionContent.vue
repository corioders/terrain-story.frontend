<template>
	<VFlex>
		<h6 style="margin: 0"><slot name="contact"> Kontakt </slot></h6>
		<p style="margin-bottom: 0">terrainstory@gmail.com</p>
		<p style="margin-top: 0">
			<slot name="messageOn"> Wiadomość na</slot>
			<InfoLink href="https://www.instagram.com/terrain.story/" newCard>
				<slot name="messageOnInstagram"> Instagramie </slot>
			</InfoLink>
			<slot name="messageOr">lub</slot>
			<InfoLink href="https://www.facebook.com/terrain.story/" newCard>
				<slot name="messageOnFacebook"> Facebooku</slot>
			</InfoLink>
		</p>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent } from 'vue';

import { InfoLink } from '@/theme/Link';

export default defineComponent({
	name: 'ContactSectionContent',
	components: {
		VFlex,
		InfoLink,
	},
});
</script>
