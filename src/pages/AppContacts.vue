<template lang="">

    <div>
        <h3 class="text-center mt-4 pb-4">
            Contact us with this form about your opinion of our Cocktails!
        </h3>
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Write your comment here:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">Select your personal vote about our Cocktails</label>
                <select id="disabledSelect" class="form-select">
                <option>Very Good</option>
                <option>Best Cocktails of my life!</option>
                <option>Not bad</option>
                <option>Disgusting</option>
                </select>
            </div>
            <button type="submit" class="btn btn-dark text-uppercase mt-2">Submit</button>
            </form>
            </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style lang="scss" scoped>

div{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


</style>