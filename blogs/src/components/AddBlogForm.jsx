export default function AddBlogForm() {
    return  <main className=" vw-100 h-2/3">
    <section className="w-1/3 h-2/3 border-black border-2 rounded-lg m-auto">
    <form className="flex flex-col justify-around items-center h-full" >

        <div className="w-1/3  border-black border-2 rounded-lg mt-1 mb-1 m-auto text-center">
      <i class="fa-solid fa-upload"></i> <br/>       <span>Click to upload blog image</span>
        </div>
        <label htmlFor="title">Blog title</label>
        <input className="input input-bordered w-2/3 border-slate-950" placeholder="Enter Blog Title..." type="text" name="title"/>
        <label htmlFor="title">Blog content</label>
        <textarea className="input input-bordered w-2/3 h-20 border-slate-950" name="content" placeholder="Enter Blog Content..." id=""></textarea>
        <button type="submit" className="btn bg-slate-500">Add Item</button>
    </form>
    </section>
</main>
}