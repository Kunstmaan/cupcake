# Navigation

## html

Depends on icons from font-awsome.

<pre><code>
<nav>
    <!-- Mobile menu toggle -->
    <div class="js-cupcake-menu__toggle cupcake-menu__toggle cupcake-menu__toggle--top">
        MENU
        <i class="icon-reorder"></i>
        <i class="icon-remove"></i>
    </div>

    <!-- Menu -->
    <ul class="cupcake-menu">
        <!-- Menu item -->
        <li class="cupcake-menu__item">
            <a href="#" class="cupcake-menu__link">Navitem L1</a>
        </li>

        <!-- Menu item active -->
        <li class="cupcake-menu__item cupcake-menu__item--active">
            <a href="#" class="cupcake-menu__link">Navitem L1</a>
        </li>

        <!-- Menu item with submenu -->
        <li class="cupcake-menu__item">
            <a href="#" class="cupcake-menu__link">Navitem L1</a>

            <!-- Mobile submenu toggle -->
            <div class="js-cupcake-menu__toggle cupcake-menu__toggle cupcake-menu__toggle--submenu">
                <i class="icon-chevron-down"></i>
                <i class="icon-chevron-up"></i>
            </div>

            <!-- Submenu -->
            <ul class="cupcake-menu cupcake-menu__sublevel">
                <li class="cupcake-menu__item">
                    <a href="#" class="cupcake-menu__link">
                        Navitem L2
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
</code></pre>
