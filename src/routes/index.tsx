import { component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { HomeHeaderQwik } from "~/components/HomeHeader/HomeHeader";
// import { VisibleHomePageBookQwik } from "~/components/isVisible/Visible.jsx";
import { VisibleVectorQwik } from "~/components/isVisible/VisibleVector.jsx";
import { VisibleHomePageBookQwik } from "~/components/isVisible/VisibleHomePageBook.jsx";

export default component$(() => 
{
	const navigate = useNavigate()
	// const tiltedRef = useSignal<Element>()

	// const isVisible = useSignal(false)

	// useVisibleTask$(() => 
	// {
	// 	window.onscroll = () => 
	// 	{

	// 	}
	// })

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
        <div class='HomePageContainer'>
            <HomeHeaderQwik />
            <div class='HomePage'>
                <div class='IVectors'>
                    <div class='IVector'></div>
                    <div class='IVector'></div>
					<VisibleVectorQwik client:visible classValue={'IVectorTilted'}  styles={{}} visible={{ transform: 'rotate(0deg)' }} hidden={{ transform: 'rotate(-20deg)' }} transition={{ duration: 0.5, delay: 0.25 }} once={false} />
                </div>
				<VisibleHomePageBookQwik client:visible classValue={'HomePageBookSession'} styles={{}} visible={{ opacity: 1, x: 0 }} hidden={{ opacity: 0, x: 200 }} transition={{ duration: 1, delay: 0.25 }} once={false} />
			</div>
        </div>
    )
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
