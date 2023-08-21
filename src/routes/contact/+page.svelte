<script>

</script>

<div class="lg:max-w-[1300px] m-auto p-5 lg:p-0">
	<div class="lg:flex justify-between">
		<div class="my-20">
			<p class="service text-sm font-semibold lg:w-1/2">C O N T A C T</p>
			<p class="font-bold text-5xl lg:text-8xl">Let's Get in <br />Touch With Us</p>
			<form
				on:submit={(evt) => {
					sendmail(evt.target['email'].value);
				}}
				class="my-10 space-y-5"
			>
				<input
					type="text"
					placeholder="Name*"
					class="input w-full lg:max-w-xs bg-[#F2F2F2]"
					required
				/>
				<input type="text" placeholder="Company" class="input w-full lg:max-w-xs bg-[#F2F2F2]" />
				<div class="space-y-5 lg:space-y-0">
					<input
						type="text"
						placeholder="Phone Number*"
						class="input w-full lg:max-w-xs bg-[#F2F2F2]"
						required
					/>
					<input
						type="text"
						name="email"
						placeholder="Email *"
						class="input w-full lg:max-w-xs bg-[#F2F2F2]"
						required
					/>
				</div>
				<input type="text" placeholder="Name*" class="input w-full bg-[#F2F2F2] mb-5" required />
				<textarea
					class="textarea bg-[#F2F2F2] w-full"
					rows="5"
					placeholder="Your Message"
					required
				/>
				<button class="btn btn-outline btn-warning my-5">Lets Talk</button>
			</form>
		</div>
		<div
			class="lg:w-1/3 shadow-lg rounded-3xl p-10 border sticky top-36 mb-5 mx-auto max-h-[650px] mt-10 subbg-color"
		>
			<p class="text-2xl font-bold">Contact Info</p>
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
					<p class="font-semibold">Email</p>
					<p class="text-base">info@innovus.com.my</p>
				</div>
				<div />
			</div>
			<div class="flex mt-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-6 mr-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					/>
				</svg>
				<div>
					<p class="font-semibold">Phone Number</p>
					<p class="text-base">+60 11-2667 2678</p>
				</div>
				<div />
			</div>
			<div class="flex my-5">
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
						d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<div class="max-w-[600px]">
					<p class="font-semibold">Hours</p>
					<p class="text-base">Monday - Friday / 9:00 am - 6:00 pm</p>
				</div>
			</div>
			<div class="flex my-5">
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
					<p class="font-semibold">Visit Us</p>
					<p class="text-base">
						A-12-01, Aurora Place Sovo, Persiaran Jalil 1, Bukit Jalil, 57000 Kuala Lumpur, Malaysia
					</p>
				</div>
			</div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1513456707517!2d101.66759907572578!3d3.05413425372782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4ae763cbe2c9%3A0x9159a1c948632839!2sAurora%20Place%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1692172881779!5m2!1sen!2smy"
				width="100%"
				height="40%"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
</div>

<style>
	.service::before {
		content: '';
		background-color: #3ec6ec;
		width: 50px;
		height: 2px;
		display: inline-block;
		vertical-align: middle;
		margin-right: 0.5rem;
	}
</style>
