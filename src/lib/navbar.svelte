<script>
	import { goto } from '$app/navigation';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import { darktheme } from './nav';

	onMount(() => {
		themeChange(false);

		if (typeof localStorage !== 'undefined') {
			if (localStorage.length === 0 && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localStorage.setItem('theme', 'dark');
			} else if (
				localStorage.length === 0 &&
				window.matchMedia('(prefers-color-scheme: light)').matches
			) {
				localStorage.setItem('theme', 'light');
				darktheme.set(false);
			}
		}
		if (
			localStorage.getItem('theme') === 'dark' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			darktheme.set(true);
		} else {
			darktheme.set(false);
		}
	});
	let isChecked = false;

	let isCheckedlogo = false;

	function toggleCheckboxes() {
		isCheckedlogo = true;
	}
	toggleCheckboxes();
</script>

<div class="bg-color transition p-5 lg:px-0 sticky top-0 z-20">
	<div class="lg:w-[1300px] lg:py-5 m-auto flex justify-between">
		<div class="text-4xl flex items-center">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<label class="swap swap-flip text-9xl">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" bind:checked={isCheckedlogo} disabled />
				{#if $darktheme}
					<div class="swap-on">
						<img
							src="../INNOVUS-LOGO(Black).png"
							alt=""
							class="cursor-pointer w-[150px] lg:w-[250px]"
							on:click={() => {
								goto('/');
							}}
						/>
					</div>
					<div class="swap-off">
						<img
							src="../INNOVUS-LOGO(White).png"
							alt=""
							width="250px"
							class="cursor-pointer w-[150px] lg:w-[250px]"
							on:click={() => {
								goto('/');
							}}
						/>
					</div>
				{:else}
					<div class="swap-off">
						<img
							src="../INNOVUS-LOGO(Black).png"
							alt=""
							width="250px"
							class="cursor-pointer w-[150px] lg:w-[250px]"
							on:click={() => {
								goto('/');
							}}
						/>
					</div>
					<div class="swap-on">
						<img
							src="../INNOVUS-LOGO(White).png"
							alt=""
							width="250px"
							class="cursor-pointer w-[150px] lg:w-[250px]"
							on:click={() => {
								goto('/');
							}}
						/>
					</div>
				{/if}
			</label>
		</div>
		<div class="font-medium flex">
			<div class="hidden md:block">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="font-bold flex">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="btn btn-ghost"
						on:click={() => {
							goto('/about');
						}}
					>
						ABOUT
					</div>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<div class="dropdown dropdown-hover">
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label tabindex="0" class="btn btn-ghost min-w-[120px]"
							>SERVICES
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li><a href="../services/webdevelopment">WEB DEVELOPMENT</a></li>
							<li><a href="../services/SEO">SEO</a></li>
							<li><a href="../services/digitalmarketing">DIGITAL MARKETING</a></li>
							<li><a href="../services/creativemedia">CREATIVE MEDIA</a></li>
							<li><a href="../services/data">DATA & BUSINESS ANALYSIS</a></li>
						</ul>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="btn btn-ghost"
						on:click={() => {
							goto('/portfolio');
						}}
					>
						PORTFOLIO
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="btn btn-ghost"
						on:click={() => {
							goto('/contact');
						}}
					>
						CONTACT
					</div>
				</div>
			</div>
			<div class="flex">
				<label class="btn btn-circle btn-md swap swap-rotate btn-ghost">
					<!-- this hidden checkbox controls the state -->

					<input
						type="checkbox"
						data-toggle-theme="dark,light"
						class="w-full h-full hidden"
						data-act-class="ACTIVECLASS"
						bind:checked={isCheckedlogo}
					/>
					{#if $darktheme}
						<!-- sun icon -->
						<svg
							class="swap-on fill-current w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/></svg
						>
						<!-- moon icon -->
						<svg
							class="swap-off fill-current w-6 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/></svg
						>
					{:else}
						<!-- sun icon -->
						<svg
							class="swap-off fill-current w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/></svg
						>
						<!-- moon icon -->
						<svg
							class="swap-on fill-current w-6 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/></svg
						>{/if}
				</label>

				<!--HAMBURGER ICON-->

				<div class="drawer drawer-end">
					<input id="my-drawer-4" type="checkbox" class="drawer-toggle" bind:checked={isChecked} />
					<div class="drawer-content">
						<!-- Page content here -->
						<label for="my-drawer-4" class="drawer-button btn btn-ghost btn-circle">
							<label class="swap swap-rotate">
								<!-- this hidden checkbox controls the state -->
								<input type="checkbox" bind:checked={isChecked} />

								<!-- hamburger icon -->
								<svg
									class="swap-off fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 512 512"
									><path
										d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
									/></svg
								>

								<!-- close icon -->
								<svg
									class="swap-on fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 512 512"
									><polygon
										points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
									/></svg
								>
							</label></label
						>
					</div>
					<div class="drawer-side">
						<label for="my-drawer-4" class="drawer-overlay" />
						<div class="lg:flex w-full">
							<div class="hidden lg:block bg-black text-white lg:w-[60%] h-[100vh] p-10 lg:pl-32">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
								<img
									src="../INNOVUS-LOGO(Black).png"
									alt=""
									class="cursor-pointer w-[150px] lg:w-[250px] hidden lg:block"
									on:click={() => {
										goto('/');
									}}
								/>
								<div class="text-3xl lg:text-5xl font-black space-y-7 my-10 lg:my-20">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('../services/webdevelopment');
										}}
									>
										Web Development
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										on:click={() => {
											isChecked = false;
											goto('../services/webdevelopment');
										}}
										class="hover:underline cursor-pointer"
									>
										Search Engine Optimization
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										on:click={() => {
											isChecked = false;
											goto('../services/webdevelopment');
										}}
										class="hover:underline cursor-pointer"
									>
										Digital Marketing
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										on:click={() => {
											isChecked = false;
											goto('../services/webdevelopment');
										}}
										class="hover:underline cursor-pointer"
									>
										Creative Media
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										on:click={() => {
											isChecked = false;
											goto('../services/webdevelopment');
										}}
										class="hover:underline cursor-pointer"
									>
										Data & Business Analysis
									</p>
								</div>
							</div>
							<div class="lg:w-[40%] h-[100vh] bg-white text-black p-10">
								<div class="flex justify-between items-center lg:relative">
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<img
										src="../INNOVUS-LOGO(White).png"
										alt=""
										class="cursor-pointer w-[150px] lg:w-[250px] lg:hidden"
										on:click={() => {
											goto('/');
										}}
									/>
									<label class="swap swap-rotate lg:absolute right-[10%] top-[10%]">
										<!-- this hidden checkbox controls the state -->
										<input type="checkbox" bind:checked={isChecked} />

										<!-- close icon -->
										<svg
											class="swap-on fill-current"
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 512 512"
											><polygon
												points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
											/></svg
										>
									</label>
								</div>
								<div
									class="text-3xl lg:text-5xl font-black space-y-7 lg:w-1/3 mt-10 lg:mt-[130px] mx-auto"
								>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('/');
										}}
									>
										Home
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('../about');
										}}
									>
										About Us
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('../portfolio');
										}}
									>
										Portfolio
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('#');
										}}
									>
										Blog
									</p>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
									<p
										class="hover:underline cursor-pointer"
										on:click={() => {
											isChecked = false;
											goto('../contact');
										}}
									>
										Contact
									</p>
								</div>
								<div class="flex mt-10 lg:mt-20 lg:justify-center space-x-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-10 lg:w-16 hover:fill-[#2FC1DF] cursor-pointer"
										viewBox="0 0 512 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
										/></svg
									>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-10 lg:w-16 hover:fill-[#2FC1DF] cursor-pointer"
										viewBox="0 0 448 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
										/></svg
									>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-10 lg:w-16 hover:fill-[#2FC1DF] cursor-pointer"
										viewBox="0 0 448 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
										/></svg
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
