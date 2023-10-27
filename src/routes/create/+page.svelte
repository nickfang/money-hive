<script>
  export let data;
  $: ({ users, duration } = data)
</script>

<h1>Create Table or Get Data</h1>

<p>{users}</p>

<p>Duration: {duration}</p>