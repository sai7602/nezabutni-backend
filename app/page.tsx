'use client';
import { faker } from '@faker-js/faker';

import { useState } from 'react';

// export default async function Cart() {
// 	const [count, setCount] = useState(0);
// 	console.log(count);
const data = [
	{
		menuTitle: 'Що таке деменція?',
		shortContent:
			'Що таке деменція, як поставити діагноз і як зменшити ризик розвитку деменції або відстрочити її вплив.',
		linkUrl: 'what-dementia-is',
		contentLight: `<div class="text-main-text">
		<p class="pt-7">
		  Кожна людина час від часу може щось забувати, і зазвичай це нормально.
		  Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще
		  звернутися до лікаря загальної практики.
		</p>
	  
		<p class="pt-7">
		  Втрата пам'яті є однією з поширених ознак
		  <span class="text-accent-base underline underline-offset-5"
			>деменції</span
		  >, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це
		  пошкодження часто вражає ділянки мозку, які беруть участь у створенні
		  нових спогадів і запам’ятовуванні старих. Однак деменція може
		  проявлятися й через інші
		  <span class="text-accent-base underline underline-offset-5"
			>симптоми</span
		  >, що можуть виникати раніше за погіршення пам'яті, зокрема
		  дезорієнтація, депресія тощо.
		</p>
	  </div>`,
		contentDark: `<div class="text-main-text bg-gray-card p-10 rounded-30">
		<p class="">
		Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.
		</p>
	  
		<p class="pt-7">
		Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою
		  <span class="text-accent-base underline underline-offset-5"
			>профілактики</span
		  > можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.
		</p>
	  </div>`,
		menuSubTitle: [
			{
				SubMenuTitle: 'Основне про деменцію',
				SubMenuLinkUrl: 'https://example.com/submenu1',
				SubMenuCards: [
					{
						cardTitle: '5 речей, які треба знати про деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: faker.image.dataUri({
							width: 580,
							height: 400,
							color: faker.color.rgb(),
						}),
						cardText: [
							{
								cardTextTitle: 'Нормальні ознаки старіння',
								cardTextDescription: `З віком люди, ймовірно, помічають деякі зміни у своїх розумових здібностях. Вони можуть включати наступні ситуації:
								частіше проявляється забудькуватість, 
								потрібно більше часу на запам'ятовування,
								легше відволікатися,
								важче робити кілька справ одночасно. 
								
								Це може стати помітним, особливо в середньому віці – зазвичай це 40, 50 і початок 60-х років.
								
								Хоча ці зміни можуть засмучувати, вони є природною частиною старіння. Багато людей хвилюються, що це ранні ознаки деменції. Для більшості людей це не так.`,
							},
							{
								cardTextTitle:
									'Як деменція відрізняється від нормального перебігу старіння?',
								cardTextDescription: `Деменція включає групу симптомів. Її спричиняють різні захворювання, які пошкоджують мозок.

								Симптоми деменції з часом погіршуються і включають:
								втрату пам'яті,
								розгубленість та потребу в допомозі при виконанні щоденних завдань,
								проблеми з мовою та розумінням,
								зміни в поведінці.
								
								Коли людина має деменцію, це погіршення розумових здібностей набагато серйозніше, ніж звичайні зміни, які відбуваються з віком. 
								
								Спочатку зміни можуть бути незначними, але з часом вони стають все більш помітними. Щоб медичний працівник міг діагностувати деменцію, симптоми людини повинні суттєво впливати на її повсякденне життя. Це означає труднощі з виконанням повсякденних завдань по дому, в суспільстві або на роботі.`,
							},
						],
						cardIntroduction: `Втрата пам'яті - поширена рання ознака деменції (посилання на відповідну сторінку в розділі “Про деменцію”). Це пов'язано з тим, що її спричиняють захворювання, які пошкоджують мозок. Ці пошкодження часто зачіпають ділянки мозку, які беруть участь у створенні нових спогадів і пригадуванні старих.

						Думка про те, що у вас може бути деменція, лякає. Може бути важко говорити з іншими людьми про свої симптоми та самопочуття. Але це допоможе отримати відповіді та будь-яку необхідну підтримку.`,
						cardIntroductionTitle:
							'Як зрозуміти, що в мене розвивається деменція?',
					},
					{
						cardTitle: '10 ранніх ознак деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: faker.image.dataUri({
							width: 580,
							height: 400,
							color: faker.color.rgb(),
						}),
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Статистика та основні цифри',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: faker.image.dataUri({
							width: 580,
							height: 400,
							color: faker.color.rgb(),
						}),
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'У кого може розвинутися деменція',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Симптоми деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Що спричиняє деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Поведінкові та психологічні зміни',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
				],
			},
			{
				SubMenuTitle: 'Стадії деменції',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
		],
	},
	{
		menuTitle: 'Типи деменції',
		shortContent:
			'Дізнайтеся більше про симптоми деменції з нашої сторінки.',
		linkUrl: 'dementia-types',
		contentLight: `Кожна людина час від часу може щось забувати, і зазвичай це нормально. Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще звернутися до лікаря загальної практики.

	Втрата пам'яті є однією з поширених ознак деменції, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це пошкодження часто вражає ділянки мозку, які беруть участь у створенні нових спогадів і запам’ятовуванні старих. Однак деменція може проявлятися й через інші симптоми, що можуть виникати раніше за погіршення пам'яті, зокрема дезорієнтація, депресія тощо.`,
		contentDark: `Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.

	Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою профілактики можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.`,
		menuSubTitle: [
			{
				SubMenuTitle: 'Поширені типи деменції',
				SubMenuLinkUrl: 'https://example.com/submenu1',
				SubMenuCards: [
					{
						cardTitle: '5 речей, які треба знати про деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: '10 ранніх ознак деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Статистика та основні цифри',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'У кого може розвинутися деменція',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Симптоми деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Що спричиняє деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Поведінкові та психологічні зміни',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
				],
			},
			{
				SubMenuTitle: 'Що таке рання деменція?',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
			{
				SubMenuTitle: `Пов'язані стани`,
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
		],
	},
	{
		menuTitle: 'Діагностика та терапія',
		shortContent:
			'Дізнайтеся, чому важливо пройти обстеження, щоб перевірити, чи є у вас деменція, і про переваги отримання діагнозу.',
		linkUrl: 'diagnosis-therapy',
		contentLight: `Кожна людина час від часу може щось забувати, і зазвичай це нормально. Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще звернутися до лікаря загальної практики.

	Втрата пам'яті є однією з поширених ознак деменції, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це пошкодження часто вражає ділянки мозку, які беруть участь у створенні нових спогадів і запам’ятовуванні старих. Однак деменція може проявлятися й через інші симптоми, що можуть виникати раніше за погіршення пам'яті, зокрема дезорієнтація, депресія тощо.`,
		contentDark: `Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.

	Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою профілактики можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.`,
		menuSubTitle: [
			{
				SubMenuTitle: 'Діагностика деменції',
				SubMenuLinkUrl: 'https://example.com/submenu1',
				SubMenuCards: [
					{
						cardTitle: '5 речей, які треба знати про деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: '10 ранніх ознак деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Статистика та основні цифри',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'У кого може розвинутися деменція',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Симптоми деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Що спричиняє деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Поведінкові та психологічні зміни',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
				],
			},
			{
				SubMenuTitle: 'Лікування та медична терапія',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
			{
				SubMenuTitle: 'Нефармакологічна терапія',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
			{
				SubMenuTitle: 'Альтернативні практики',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
		],
	},
	{
		menuTitle: 'Зменшення ризику та профілактика',
		shortContent:
			'Ми створили для Вас зручний каталог у PDF, який можна переглянути за завантажити на сторінці.',
		linkUrl: 'prophylaxis',
		contentLight: `Кожна людина час від часу може щось забувати, і зазвичай це нормально. Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще звернутися до лікаря загальної практики.

	Втрата пам'яті є однією з поширених ознак деменції, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це пошкодження часто вражає ділянки мозку, які беруть участь у створенні нових спогадів і запам’ятовуванні старих. Однак деменція може проявлятися й через інші симптоми, що можуть виникати раніше за погіршення пам'яті, зокрема дезорієнтація, депресія тощо.`,
		contentDark: `Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.

	Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою профілактики можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.`,
		menuSubTitle: [
			{
				SubMenuTitle: 'Фактори ризику деменції',
				SubMenuLinkUrl: 'https://example.com/submenu1',
				SubMenuCards: [
					{
						cardTitle: '5 речей, які треба знати про деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: '10 ранніх ознак деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Статистика та основні цифри',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'У кого може розвинутися деменція',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Симптоми деменції',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Що спричиняє деменцію',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
					{
						cardTitle: 'Поведінкові та психологічні зміни',
						cardLinkUrl: 'https://example.com/card2',
						cardImg: 'card2.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 3',
								cardTextDescription: 'Description 3',
							},
							{
								cardTextTitle: 'Text 4',
								cardTextDescription: 'Description 4',
							},
						],
						cardIntroduction: 'Introduction 2',
						cardIntroductionTitle: 'Introduction Title 2',
					},
				],
			},
			{
				SubMenuTitle: 'Профілактика деменції',
				SubMenuLinkUrl: 'https://example.com/submenu2',
				SubMenuCards: [
					{
						cardTitle: 'Процес прогресування синдрому',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Рання стадія деменції',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Середня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
					{
						cardTitle: 'Пізня стадія',
						cardLinkUrl: 'https://example.com/card1',
						cardImg: 'card1.jpg',
						cardText: [
							{
								cardTextTitle: 'Text 1',
								cardTextDescription: 'Description 1',
							},
							{
								cardTextTitle: 'Text 2',
								cardTextDescription: 'Description 2',
							},
						],
						cardIntroduction: 'Introduction 1',
						cardIntroductionTitle: 'Introduction Title 1',
					},
				],
			},
		],
	},
	{
		menuTitle: 'Часті питання',
		shortContent:
			'На цій сторінці Ви можете знайти відповіді на часті запитання.',
		linkUrl: 'faq',
		contentLight: `Кожна людина час від часу може щось забувати, і зазвичай це нормально. Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще звернутися до лікаря загальної практики.

	Втрата пам'яті є однією з поширених ознак деменції, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це пошкодження часто вражає ділянки мозку, які беруть участь у створенні нових спогадів і запам’ятовуванні старих. Однак деменція може проявлятися й через інші симптоми, що можуть виникати раніше за погіршення пам'яті, зокрема дезорієнтація, депресія тощо.`,
		contentDark: `Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.

	Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою профілактики можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.`,
		menuSubTitle: [],
	},
];
// const data2 = {
// 	menuTitle: 'Типи деменції',
// 	shortContent: 'Дізнайтеся більше про симптоми деменції з нашої сторінки.',
// 	linkUrl: 'https://example.com',
// 	contentLight: `Кожна людина час від часу може щось забувати, і зазвичай це нормально. Але якщо проблеми з пам’яттю впливають на ваше повсякденне життя, краще звернутися до лікаря загальної практики.

// 	Втрата пам'яті є однією з поширених ознак деменції, яка виникає унаслідок захворювань, що пошкоджують роботу мозку. Це пошкодження часто вражає ділянки мозку, які беруть участь у створенні нових спогадів і запам’ятовуванні старих. Однак деменція може проявлятися й через інші симптоми, що можуть виникати раніше за погіршення пам'яті, зокрема дезорієнтація, депресія тощо.`,
// 	contentDark: `Погіршення пам’яті не обов’язково означає, що у вас деменція. Деякі люди можуть запам'ятовувати речі краще за інших.

// 	Багато причин проблем з пам’яттю можна усунути за допомогою правильної підтримки та лікування. Водночас за допомогою профілактики можна попередити чи відтермінувати погіршення пам’яті. На цій сторінці пояснюються причини погіршення пам’яті, як подбати про свою пам’ять та як впоратись із її погіршенням у себе чи іншої людини.`,
// 	menuSubTitle: [
// 		{
// 			SubMenuTitle: 'Основне про деменцію',
// 			SubMenuLinkUrl: 'https://example.com/submenu1',
// 			SubMenuCards: [
// 				{
// 					cardTitle: '5 речей, які треба знати про деменцію',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: '10 ранніх ознак деменції',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: 'Статистика та основні цифри',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: 'У кого може розвинутися деменція',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: 'Симптоми деменції',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: 'Що спричиняє деменцію',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 				{
// 					cardTitle: 'Поведінкові та психологічні зміни',
// 					cardLinkUrl: 'https://example.com/card2',
// 					cardImg: 'card2.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 3',
// 							cardTextDescription: 'Description 3',
// 						},
// 						{
// 							cardTextTitle: 'Text 4',
// 							cardTextDescription: 'Description 4',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 2',
// 					cardIntroductionTitle: 'Introduction Title 2',
// 				},
// 			],
// 		},
// 		{
// 			SubMenuTitle: 'Стадії деменції',
// 			SubMenuLinkUrl: 'https://example.com/submenu2',
// 			SubMenuCards: [
// 				{
// 					cardTitle: 'Процес прогресування синдрому',
// 					cardLinkUrl: 'https://example.com/card1',
// 					cardImg: 'card1.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 1',
// 							cardTextDescription: 'Description 1',
// 						},
// 						{
// 							cardTextTitle: 'Text 2',
// 							cardTextDescription: 'Description 2',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 1',
// 					cardIntroductionTitle: 'Introduction Title 1',
// 				},
// 				{
// 					cardTitle: 'Рання стадія деменції',
// 					cardLinkUrl: 'https://example.com/card1',
// 					cardImg: 'card1.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 1',
// 							cardTextDescription: 'Description 1',
// 						},
// 						{
// 							cardTextTitle: 'Text 2',
// 							cardTextDescription: 'Description 2',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 1',
// 					cardIntroductionTitle: 'Introduction Title 1',
// 				},
// 				{
// 					cardTitle: 'Середня стадія',
// 					cardLinkUrl: 'https://example.com/card1',
// 					cardImg: 'card1.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 1',
// 							cardTextDescription: 'Description 1',
// 						},
// 						{
// 							cardTextTitle: 'Text 2',
// 							cardTextDescription: 'Description 2',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 1',
// 					cardIntroductionTitle: 'Introduction Title 1',
// 				},
// 				{
// 					cardTitle: 'Пізня стадія',
// 					cardLinkUrl: 'https://example.com/card1',
// 					cardImg: 'card1.jpg',
// 					cardText: [
// 						{
// 							cardTextTitle: 'Text 1',
// 							cardTextDescription: 'Description 1',
// 						},
// 						{
// 							cardTextTitle: 'Text 2',
// 							cardTextDescription: 'Description 2',
// 						},
// 					],
// 					cardIntroduction: 'Introduction 1',
// 					cardIntroductionTitle: 'Introduction Title 1',
// 				},
// 			],
// 		},
// 	],
// };

const setDatabase = async (record: any) => {
	fetch('/api/put-data', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(record),
	})
		.then((response) => response.json())
		.then((result) => {
			console.log('New data added:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};
const clearDatabase = async () => {
	fetch('/api/clear-db', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
		.then((response) => response.json())
		.then((result) => {
			console.log('New data added:', result);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};
// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button onClick={() => setCount(count + 1)}>Click me</button>
// 		</div>
// 	);
// }

const obj: any = {};
console.log(obj.t.r);
export default function Page() {
	return (
		<div className="flex flex-col gap-5 px-20 mx-auto">
			<div>BREAKING</div>
			<div>
				<button
					onClick={(e) => {
						clearDatabase();
						console.log('e.b.c');
					}}>
					Clear Data
				</button>
			</div>
			<div>
				<button
					onClick={(e) => {
						setDatabase(data[0]);
						console.log('e.b.c');
					}}>
					картка 1
				</button>
			</div>
			<div>
				<button
					onClick={(e) => {
						setDatabase(data[1]);
						console.log('e.b.c');
					}}>
					картка 2
				</button>
			</div>
			<div>
				<button
					onClick={(e) => {
						setDatabase(data[2]);
						console.log('e.b.c');
					}}>
					картка 3
				</button>
			</div>
			<div>
				<button
					onClick={(e) => {
						setDatabase(data[3]);
						console.log('e.b.c');
					}}>
					картка 4
				</button>
			</div>
			<div>
				<button
					onClick={(e) => {
						setDatabase(data[4]);
						console.log('e.b.c');
					}}>
					картка 5
				</button>
			</div>
		</div>
	);
}
