const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Skills</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar;