<div class=" h-full">
	<div class="flex justify-between mb-20">
		<label class="swap swap-flip text-9xl">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={isCheckedlogo} disabled />
			{#if $darktheme}
				<div class="swap-on">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
				><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
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
		</label>
	</div>
	<div class="flex justify-between">
		<div class="text-5xl font-black space-y-7 w-2/3 bg-black h-full">
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
		<div class="text-5xl font-black space-y-7 w-1/3">
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
	</div>
</div>





