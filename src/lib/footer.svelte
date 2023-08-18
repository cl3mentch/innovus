<script>
	import { goto } from '$app/navigation';
</script>

<footer class="p-5 lg:p-20 py-20 lg:py-0  bg-gray-200 text-base-content">
	<div class="lg:flex lg:max-w-[1300px] m-auto">
		<div class="lg:w-2/5">
			<img src="/INNOVUS-LOGO(White).png" alt="" width="250px" />
			<p class="lg:max-w-[400px] text-lg leading-9 text-[#888D94]">
				Innovus provides customized data and digital solutions to help businesses succeed. We
				prioritize innovation, quality, and customer satisfaction to be your trusted partner.
			</p>
		</div>
		<div class="lg:w-1/5 flex flex-col my-10 lg:my-0">
			<span class="footer-title text-2xl">Services</span>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-hover" href="../services/webdevelopment">Web Development</a>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-hover" href="../services/SEO">Search Engine Optimization</a>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-hover" href="../services/digitalmarketing">Digital Marketing</a>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-hover" href="../services/creativemedia">Creative Media</a>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-hover" href="../services/data">Data & Business Analysis</a>
		</div>
		<div class="lg:w-2/5">
			<span class="footer-title text-2xl">Contact Us</span>
			<div class="flex mt-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10 mr-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
					/>
				</svg>
				<div class="max-w-[600px]">
					<p class="font-semibold">Office Address</p>
					<p class="text-base">
						A-12-01, Aurora Place Sovo, Persiaran Jalil 1, Bukit Jalil, 57000 Kuala Lumpur, Malaysia
					</p>
				</div>
			</div>
			<div class="flex mt-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mr-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>

				<div>
					<p class="font-semibold">Email Us</p>
					<p class="text-base">info@innovus.com.my</p>
				</div>
				<div />
			</div>

			<div class="flex mt-5 ml-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 512 512"
					class="fill-[#888D94] w-10 h-10 hover:fill-[#3DC3D9] cursor-pointer"
				>
					<path
						d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
					/></svg
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 448 512"
					class="ig fill-[#888D94] w-10 h-10 ml-2 hover:fill-[#3DC3D9] cursor-pointer"
					><path
						d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
					/></svg
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 448 512"
					class="fill-[#888D94] w-10 h-10 ml-2 hover:fill-[#3DC3D9] cursor-pointer"
					><path
						d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
					/></svg
				>
			</div>
		</div>
		<div />
	</div>
</footer>
<div class="footer bg-base-200 flex justify-center text-[#888D94]">
	<p>Copyright 2023 © All rights Reserved. Innovus Data Sdn Bhd (1501953-T)</p>
</div>
