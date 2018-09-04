import React from "react";
export default () => {
  return (
    <div>
      <h1 className="display-4">About Treći zadatak</h1>
      <p className="lead">
        Potrebno je napraviti single-page aplikaciju koristeći B oostrap3 i
        AngularJS framework. Aplikacija je jednostavni imenik koji omogućava
        korisniku unos podataka o kontaktima. Svaki kontakt ima sljedeće
        podatke:
        <ul>
          <li>unikatni ID (integer, auto increment)</li>
          <li>ime</li>
          <li>prezime</li>
          <li>adresa</li>
          <li>poštanski broj</li>
          <li>grad</li>
          <li>država</li>
          <li>proizvoljan broj telefonskih brojeva</li>
          <li>email adresu</li>
        </ul>
        Sva polja su obavezna i moraju se validirati prije pohrane. Storage
        birajte sami (nema komunikacije sa serverskom stranom). Aplikacija mora
        moći izlistati sve kontakte (s paginacijom), kreirati, izmijeniti,
        obrisati i prikazati svaki pojedini kontakt u svom "pageu" (viewu,
        zasebna ruta za svaki akciju). <br /> Potrebna je mogućnost
        pretraživanje kontakata po imenu, prezimenu, broju telefona ili e-mail
        adresi (po nekom ili svim poljima). <br /> Aplikacija nudi korisniku
        mogućnost merganja kontakata ako oni imaju isto ime i isto prezime.
        Merge akcija se pokreće na klik gumba. Svaki potencijalni merge mora
        odobriti korisnik aplikacije. Ako kontakti koji se mergaju imaju
        popunjene podatke za npr. adresu, onda korisnik mora odabrat koju adresu
        želi prihvatiti. Ako jedan kontakt ima neki podatak, a ostali u mergu
        nemaju, onda korisnik ne treba potvrditi merge tog podatka. <br />{" "}
        Aplikacija mora imati i mogućnost navigacije sa back/forward
        mogućnostima browsera te mogućnost “shareanja” ili "bookmarkanja"
        linkova – npr., ako korisnik ode na link .../user/45/edit, mora mu se
        pokazati forma za uređivanje korisnika sa ID-om 45.
      </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
