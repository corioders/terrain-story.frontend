import Question from '@/components/closedQuestion/question';

export const crypto: Question = {
	question: 'Który z wymienionych krajów jako pierwszy zdecydował się na uznanie kryptowalut jako legalnego środka płatniczego?',
	options: ['Salwador', 'Brazylia', 'Rosja', 'Szwecja'],
	answer: 'Salwador',
};
Object.freeze(crypto);

export const card: Question = {
	question:
		'Płatności bezgotówkowe są coraz bardziej popularną formą płatności na całym świecie. Wiele państw decyduje się na odejście od standardowego, fizycznego pieniądza. Na przykład w Sztokholmie biletów komunikacji miejskiej nie kupimy za pomocą gotówki. W którym z podanych krajów płatności bezgotówkowe stanowią aż 90% wszystkich transakcji?',
	options: ['Szwecja', 'Korea Południowa', 'Chiny', 'Norwegia'],
	answer: 'Szwecja',
};
Object.freeze(card);
