import { reviews } from "../constants"


const niceCustomerFeedback = () => {

const listItems = reviews.map((review,index)  => 
    <li key={index}>
        <img
            src={review.thumbnail}
            width={200}
            height={200}
        />        
    </li>
);


return (
    <div className="relative font-inter antialiased">

    <main className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div className="text-center"></div>
    <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {listItems}
        </ul>                
    </div>
    </div>

</main>
</div>
    )
}

export default niceCustomerFeedback