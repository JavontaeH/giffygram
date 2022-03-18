export const Footer = () => {
  return `
        <footer class="footer">
            <p class="footer__item">Javontae Hardeman @ NSS 55, &copy; ${new Date().getFullYear()} , For learning purposes only.</p>
             <div class="footer__item">
                Posts since <select id="yearSelection">
                <option selected disabled>Filter by Year Since</option>
                <option>2022</option>
                <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
                <span id="postCount"></span>
            </div>
        </footer>
    `;
};
