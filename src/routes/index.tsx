import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { useInView } from 'framer-motion'

export default component$(() => 
{
	const navigate = useNavigate()
	const tiltedRef = useSignal<Element>()

	const isVisible = useInView(tiltedRef)

	// useVisibleTask$(({ track }) => 
	// {
	// 	track(isVisible)
	// 	track(tiltedRef)
	// 	console.log(isVisible.value)
	// })

	useVisibleTask$(({ track }) => 
	{
		track(isVisible)
		console.log(isVisible)
	})

	useVisibleTask$(() => 
	{
		tiltedRef.value?.scrollIntoView({behavior: 'smooth'})
		isVisible.value = tiltedRef.value?.checkVisibility()
	})

	return (
		<>
			<div style={{ height: '300vh' }}>
				test
			</div>
			<div style={{ height: '100vh' }} ref={tiltedRef}>
				testRef
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
