import { QwikAnimationEvent, component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { VisibleQwik } from "~/components/isVisible/Visible.jsx";

export default component$(() => 
{
	const navigate = useNavigate()
	// const tiltedRef = useSignal<QwikAnimationEvent>()

	const isVisible = useSignal(false)



	// useVisibleTask$(() => 
	// {
	// 	window.onscroll = () => 
	// 	{
	// 		console.log(tiltedRef.value?.)
	// 	}
	// })

	// // useVisibleTask$(() => 
	// // {
	// // 	window.onscroll = () => {
	// // 		console.log(tiltedRef.value?.checkVisibility())
	// // 		isVisible.value = tiltedRef.value?.checkVisibility()
	// // 	}
	// // 	console.log(isVisible.value)
	// // })

	// useVisibleTask$(() => 
	// {
	// 	tiltedRef.value?.scrollIntoView({behavior: 'smooth'})
	// })

	return (
		<>
			<div style={{ height: '300vh' }}>
				test
			</div>
			<div onCanPlay$={() => {
				isVisible.value = true
				console.log('test')
			}}>
				test
			</div>
		</>
	);
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
