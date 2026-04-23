
const FOODS = [{"category": "Fromages", "food": "Roquefort", "base": 3.8, "variability": 1.35, "states": ["Affiné"]}, {"category": "Fromages", "food": "Bleu d'Auvergne", "base": 3.4, "variability": 1.3, "states": ["Affiné"]}, {"category": "Fromages", "food": "Fourme d'Ambert", "base": 3.2, "variability": 1.3, "states": ["Affiné"]}, {"category": "Fromages", "food": "Gorgonzola", "base": 3.4, "variability": 1.3, "states": ["Affiné"]}, {"category": "Fromages", "food": "Stilton", "base": 3.6, "variability": 1.3, "states": ["Affiné"]}, {"category": "Fromages", "food": "Danablu", "base": 3.3, "variability": 1.28, "states": ["Affiné"]}, {"category": "Fromages", "food": "Bleu de Bresse", "base": 3.1, "variability": 1.26, "states": ["Affiné"]}, {"category": "Fromages", "food": "Bleu des Causses", "base": 3.2, "variability": 1.28, "states": ["Affiné"]}, {"category": "Fromages", "food": "Cabrales", "base": 3.7, "variability": 1.32, "states": ["Affiné"]}, {"category": "Fromages", "food": "Brie jeune", "base": 1.2, "variability": 1.15, "states": ["Frais"]}, {"category": "Fromages", "food": "Brie affiné", "base": 2.6, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Camembert jeune", "base": 1.4, "variability": 1.15, "states": ["Frais"]}, {"category": "Fromages", "food": "Camembert très affiné", "base": 2.6, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Reblochon", "base": 2.2, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Munster", "base": 3.0, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Livarot", "base": 3.1, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Époisses", "base": 3.3, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Pont-l'Évêque", "base": 2.8, "variability": 1.22, "states": ["Affiné"]}, {"category": "Fromages", "food": "Maroilles", "base": 3.2, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Langres", "base": 2.9, "variability": 1.23, "states": ["Affiné"]}, {"category": "Fromages", "food": "Chaource", "base": 2.0, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Saint-Nectaire", "base": 2.2, "variability": 1.19, "states": ["Affiné"]}, {"category": "Fromages", "food": "Tomme de Savoie", "base": 2.0, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Cantal jeune", "base": 1.8, "variability": 1.16, "states": ["Frais"]}, {"category": "Fromages", "food": "Cantal vieux", "base": 2.8, "variability": 1.22, "states": ["Affiné"]}, {"category": "Fromages", "food": "Cheddar jeune", "base": 1.6, "variability": 1.15, "states": ["Frais"]}, {"category": "Fromages", "food": "Cheddar vieux", "base": 3.2, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Gouda jeune", "base": 1.5, "variability": 1.15, "states": ["Frais"]}, {"category": "Fromages", "food": "Gouda vieux", "base": 3.0, "variability": 1.25, "states": ["Affiné"]}, {"category": "Fromages", "food": "Edam", "base": 1.7, "variability": 1.15, "states": ["Affiné"]}, {"category": "Fromages", "food": "Emmental", "base": 1.8, "variability": 1.15, "states": ["Affiné"]}, {"category": "Fromages", "food": "Gruyère", "base": 2.2, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Beaufort", "base": 2.4, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Abondance", "base": 2.2, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Comté jeune", "base": 1.4, "variability": 1.15, "states": ["Frais"]}, {"category": "Fromages", "food": "Comté vieux", "base": 3.0, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Parmesan", "base": 3.4, "variability": 1.15, "states": ["Affiné"]}, {"category": "Fromages", "food": "Pecorino", "base": 3.1, "variability": 1.22, "states": ["Affiné"]}, {"category": "Fromages", "food": "Manchego affiné", "base": 2.8, "variability": 1.2, "states": ["Affiné"]}, {"category": "Fromages", "food": "Asiago", "base": 2.7, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Provolone", "base": 2.4, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Raclette", "base": 2.2, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Mimolette", "base": 2.4, "variability": 1.18, "states": ["Affiné"]}, {"category": "Fromages", "food": "Feta", "base": 1.2, "variability": 1.1, "states": ["Frais"]}, {"category": "Fromages", "food": "Halloumi", "base": 1.1, "variability": 1.1, "states": ["Frais"]}, {"category": "Fromages", "food": "Mozzarella", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Burrata", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Ricotta", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Mascarpone", "base": 0.4, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Fromage frais", "base": 0.4, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Cottage cheese", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Fromages", "food": "Cream cheese", "base": 0.4, "variability": 1.02, "states": ["Frais"]}, {"category": "Fromages", "food": "Faisselle", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Charcuteries", "food": "Salami", "base": 4.0, "variability": 1.35, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Saucisson sec", "base": 3.8, "variability": 1.35, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Rosette", "base": 3.7, "variability": 1.33, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Chorizo sec", "base": 3.6, "variability": 1.3, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Coppa", "base": 3.2, "variability": 1.25, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Pancetta", "base": 3.0, "variability": 1.25, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Bresaola", "base": 2.8, "variability": 1.2, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Jambon cru", "base": 3.0, "variability": 1.2, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Prosciutto", "base": 3.0, "variability": 1.2, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Speck", "base": 2.8, "variability": 1.2, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Lard fumé", "base": 2.5, "variability": 1.2, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Bacon fumé", "base": 2.3, "variability": 1.18, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Pepperoni", "base": 3.9, "variability": 1.33, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Mortadelle", "base": 2.8, "variability": 1.2, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Pastrami", "base": 3.0, "variability": 1.22, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Viande séchée", "base": 3.1, "variability": 1.22, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Viande fumée", "base": 2.8, "variability": 1.2, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Viande salée", "base": 2.7, "variability": 1.2, "states": ["Standard"]}, {"category": "Charcuteries", "food": "Jambon blanc", "base": 0.4, "variability": 1.0, "states": ["Frais"]}, {"category": "Charcuteries", "food": "Dinde fumée", "base": 2.0, "variability": 1.15, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Pâté de campagne", "base": 1.6, "variability": 1.18, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Charcuteries", "food": "Terrine", "base": 1.5, "variability": 1.18, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Charcuteries", "food": "Rillettes", "base": 1.6, "variability": 1.2, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Charcuteries", "food": "Foie gras", "base": 1.4, "variability": 1.16, "states": ["Frais"]}, {"category": "Charcuteries", "food": "Boudin noir", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Charcuteries", "food": "Boudin blanc", "base": 1.2, "variability": 1.1, "states": ["Standard"]}, {"category": "Charcuteries", "food": "Saucisse sèche", "base": 3.5, "variability": 1.28, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Saucisse fumée", "base": 2.8, "variability": 1.2, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Andouille", "base": 3.0, "variability": 1.22, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Andouillette", "base": 1.6, "variability": 1.15, "states": ["Standard"]}, {"category": "Charcuteries", "food": "Pastrami de boeuf", "base": 3.0, "variability": 1.22, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Porc maturé", "base": 3.1, "variability": 1.22, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Magret fumé", "base": 2.7, "variability": 1.2, "states": ["Fumé"]}, {"category": "Charcuteries", "food": "Canard confit", "base": 1.4, "variability": 1.12, "states": ["Standard"]}, {"category": "Charcuteries", "food": "Foie de volaille", "base": 2.0, "variability": 1.15, "states": ["Frais"]}, {"category": "Charcuteries", "food": "Foie de boeuf", "base": 2.2, "variability": 1.18, "states": ["Frais"]}, {"category": "Charcuteries", "food": "Gibier faisandé", "base": 3.8, "variability": 1.35, "states": ["Affiné"]}, {"category": "Charcuteries", "food": "Poulet rôti", "base": 0.6, "variability": 1.05, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Charcuteries", "food": "Boeuf cuit", "base": 0.6, "variability": 1.05, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Charcuteries", "food": "Porc cuit", "base": 0.6, "variability": 1.05, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Poissons et mer", "food": "Hareng mariné", "base": 4.2, "variability": 1.35, "states": ["Mariné"]}, {"category": "Poissons et mer", "food": "Anchois", "base": 3.4, "variability": 1.25, "states": ["Mariné"]}, {"category": "Poissons et mer", "food": "Sardines marinées", "base": 2.8, "variability": 1.2, "states": ["Mariné"]}, {"category": "Poissons et mer", "food": "Maquereau mariné", "base": 3.0, "variability": 1.22, "states": ["Mariné"]}, {"category": "Poissons et mer", "food": "Saumon fumé", "base": 2.1, "variability": 1.2, "states": ["Fumé"]}, {"category": "Poissons et mer", "food": "Truite fumée", "base": 2.0, "variability": 1.18, "states": ["Fumé"]}, {"category": "Poissons et mer", "food": "Anguille fumée", "base": 2.6, "variability": 1.2, "states": ["Fumé"]}, {"category": "Poissons et mer", "food": "Poisson fumé", "base": 2.8, "variability": 1.22, "states": ["Fumé"]}, {"category": "Poissons et mer", "food": "Poisson séché", "base": 2.8, "variability": 1.2, "states": ["Affiné"]}, {"category": "Poissons et mer", "food": "Poisson salé", "base": 2.7, "variability": 1.2, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Thon en boîte", "base": 1.2, "variability": 1.12, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Sardines en boîte", "base": 1.4, "variability": 1.12, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Maquereau en boîte", "base": 1.5, "variability": 1.12, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Anchois en boîte", "base": 2.6, "variability": 1.18, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Thon frais", "base": 0.3, "variability": 1.0, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Poissons et mer", "food": "Cabillaud frais", "base": 0.3, "variability": 1.0, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Poissons et mer", "food": "Saumon frais", "base": 0.3, "variability": 1.0, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Poissons et mer", "food": "Crevettes fraîches", "base": 0.3, "variability": 1.0, "states": ["Frais", "Restes 24 h"]}, {"category": "Poissons et mer", "food": "Moules fraîches", "base": 0.3, "variability": 1.02, "states": ["Frais", "Restes 24 h"]}, {"category": "Poissons et mer", "food": "Huîtres", "base": 0.3, "variability": 1.02, "states": ["Frais"]}, {"category": "Poissons et mer", "food": "Caviar", "base": 2.2, "variability": 1.16, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Tarama", "base": 1.8, "variability": 1.15, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Pâté de poisson", "base": 1.6, "variability": 1.15, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Poissons et mer", "food": "Surimi", "base": 0.6, "variability": 1.08, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Morue salée", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Poissons et mer", "food": "Hareng fumé", "base": 3.0, "variability": 1.22, "states": ["Fumé"]}, {"category": "Poissons et mer", "food": "Rollmops", "base": 3.4, "variability": 1.25, "states": ["Mariné"]}, {"category": "Poissons et mer", "food": "Sushi saumon", "base": 0.6, "variability": 1.08, "states": ["Frais"]}, {"category": "Poissons et mer", "food": "Sushi thon", "base": 0.6, "variability": 1.08, "states": ["Frais"]}, {"category": "Poissons et mer", "food": "Poisson cuit", "base": 0.7, "variability": 1.15, "states": ["Frais", "Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Fermentés et condiments", "food": "Sauce soja", "base": 3.6, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Tamari", "base": 3.6, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Miso", "base": 3.5, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Tempeh", "base": 3.0, "variability": 1.22, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Natto", "base": 3.4, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Tofu fermenté", "base": 3.0, "variability": 1.22, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Kimchi", "base": 2.8, "variability": 1.2, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Choucroute", "base": 2.4, "variability": 1.2, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Cornichons lactofermentés", "base": 1.8, "variability": 1.12, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Kéfir", "base": 1.4, "variability": 1.1, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Yaourt nature", "base": 0.6, "variability": 1.05, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Yaourt grec", "base": 0.8, "variability": 1.06, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Crème aigre", "base": 1.6, "variability": 1.15, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Extrait de levure", "base": 4.2, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Marmite", "base": 4.0, "variability": 1.24, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Vegemite", "base": 4.0, "variability": 1.24, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Bovril", "base": 4.0, "variability": 1.24, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Bouillon cube", "base": 1.8, "variability": 1.12, "states": ["Standard"]}, {"category": "Fermentés et condiments", "food": "Sauce poisson", "base": 2.8, "variability": 1.18, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Gochujang", "base": 2.6, "variability": 1.18, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Doenjang", "base": 3.0, "variability": 1.22, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Pâte de crevettes", "base": 3.0, "variability": 1.22, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Amino liquides", "base": 2.2, "variability": 1.15, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Kombucha", "base": 1.4, "variability": 1.1, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Chutney fermenté", "base": 1.8, "variability": 1.12, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Vinaigre de cidre non filtré", "base": 0.8, "variability": 1.06, "states": ["Fermenté"]}, {"category": "Fermentés et condiments", "food": "Pickles industriels", "base": 1.0, "variability": 1.08, "states": ["Standard"]}, {"category": "Fermentés et condiments", "food": "Olives marinées", "base": 1.0, "variability": 1.08, "states": ["Mariné"]}, {"category": "Fermentés et condiments", "food": "Tapenade", "base": 1.2, "variability": 1.1, "states": ["Standard"]}, {"category": "Fermentés et condiments", "food": "Houmous industriel", "base": 0.8, "variability": 1.08, "states": ["Standard"]}, {"category": "Fruits", "food": "Banane", "base": 0.5, "variability": 1.15, "states": ["Peu mûr", "Mûr", "Très mûr"]}, {"category": "Fruits", "food": "Avocat", "base": 0.6, "variability": 1.15, "states": ["Ferme", "Mûr", "Très mûr"]}, {"category": "Fruits", "food": "Figue", "base": 0.6, "variability": 1.12, "states": ["Mûr", "Très mûr"]}, {"category": "Fruits", "food": "Mangue", "base": 0.3, "variability": 1.05, "states": ["Mûr", "Très mûr"]}, {"category": "Fruits", "food": "Papaye", "base": 0.3, "variability": 1.05, "states": ["Mûr", "Très mûr"]}, {"category": "Fruits", "food": "Pomme", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Poire", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Orange", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Citron", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Mandarine", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Clémentine", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Raisin", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Fraises", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Framboises", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Myrtilles", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Cerises", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Pêche", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Abricot", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Prune", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Melon", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Pastèque", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Ananas", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Kiwi", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Fruits", "food": "Dattes", "base": 0.8, "variability": 1.08, "states": ["Standard"]}, {"category": "Fruits", "food": "Raisins secs", "base": 0.8, "variability": 1.08, "states": ["Standard"]}, {"category": "Fruits", "food": "Fruits confits", "base": 0.6, "variability": 1.06, "states": ["Standard"]}, {"category": "Légumes", "food": "Tomate", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Tomates séchées", "base": 1.2, "variability": 1.1, "states": ["Standard"]}, {"category": "Légumes", "food": "Aubergine", "base": 0.3, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Épinards", "base": 0.2, "variability": 1.0, "states": ["Frais", "Restes 24 h"]}, {"category": "Légumes", "food": "Champignons", "base": 0.3, "variability": 1.0, "states": ["Frais", "Restes 24 h"]}, {"category": "Légumes", "food": "Brocoli", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Chou-fleur", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Chou vert", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Kale", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Concombre", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Poivron rouge", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Poivron vert", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Courgette", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Haricots verts", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Petits pois", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Carotte", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Betterave", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Navet", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Pomme de terre", "base": 0.2, "variability": 1.0, "states": ["Frais", "Restes 24 h"]}, {"category": "Légumes", "food": "Patate douce", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Oignon", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Ail", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Fenouil", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Poireau", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Artichaut", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Asperges", "base": 0.2, "variability": 1.0, "states": ["Frais"]}, {"category": "Légumes", "food": "Maïs", "base": 0.2, "variability": 1.0, "states": ["Frais", "Standard"]}, {"category": "Légumes", "food": "Fèves / fèves de type fava", "base": 4.0, "variability": 1.25, "states": ["Standard"]}, {"category": "Légumes", "food": "Pois chiches cuits", "base": 0.3, "variability": 1.02, "states": ["Standard"]}, {"category": "Légumes", "food": "Lentilles cuites", "base": 0.3, "variability": 1.02, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Bière pression", "base": 2.7, "variability": 1.3, "states": ["Fermenté"]}, {"category": "Boissons alcoolisées", "food": "Bière artisanale", "base": 2.4, "variability": 1.25, "states": ["Fermenté"]}, {"category": "Boissons alcoolisées", "food": "Bière blonde bouteille", "base": 1.3, "variability": 1.15, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Bière sans alcool", "base": 1.0, "variability": 1.1, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Vin rouge", "base": 0.9, "variability": 1.1, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Vin blanc", "base": 0.7, "variability": 1.08, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Champagne", "base": 0.8, "variability": 1.05, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Cidre", "base": 0.8, "variability": 1.08, "states": ["Fermenté"]}, {"category": "Boissons alcoolisées", "food": "Kombucha boisson", "base": 1.4, "variability": 1.1, "states": ["Fermenté"]}, {"category": "Boissons alcoolisées", "food": "Vermouth", "base": 1.1, "variability": 1.1, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Porto", "base": 1.0, "variability": 1.1, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Sherry", "base": 1.0, "variability": 1.1, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Whisky", "base": 0.2, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Vodka", "base": 0.2, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Gin", "base": 0.2, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Rhum", "base": 0.2, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Café", "base": 0.1, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Thé noir", "base": 0.1, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Thé vert", "base": 0.1, "variability": 1.0, "states": ["Standard"]}, {"category": "Boissons alcoolisées", "food": "Eau gazeuse", "base": 0.1, "variability": 1.0, "states": ["Standard"]}, {"category": "Restes et conservation", "food": "Viande cuite", "base": 0.6, "variability": 1.1, "states": ["Frais", "Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Poisson cuit", "base": 0.7, "variability": 1.15, "states": ["Frais", "Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Plat cuisiné", "base": 0.8, "variability": 1.15, "states": ["Frais", "Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Bouillon maison", "base": 0.6, "variability": 1.1, "states": ["Frais", "Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Pizza restante", "base": 0.8, "variability": 1.1, "states": ["Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Quiche restante", "base": 0.8, "variability": 1.1, "states": ["Restes 24 h", "Restes > 48 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Pâtes réchauffées", "base": 0.4, "variability": 1.05, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Riz réchauffé", "base": 0.4, "variability": 1.05, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Poulet froid", "base": 0.6, "variability": 1.08, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Salade composée de la veille", "base": 0.5, "variability": 1.08, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Sandwich emballé", "base": 0.8, "variability": 1.1, "states": ["Standard", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Sushi du lendemain", "base": 1.4, "variability": 1.15, "states": ["Restes 24 h", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Poisson en sauce de la veille", "base": 0.9, "variability": 1.12, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Ragoût réchauffé", "base": 0.8, "variability": 1.1, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Tajine réchauffé", "base": 0.8, "variability": 1.1, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Soupe maison de la veille", "base": 0.4, "variability": 1.05, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Lasagnes restantes", "base": 0.9, "variability": 1.12, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Gratin restant", "base": 0.9, "variability": 1.12, "states": ["Restes 24 h", "Restes > 48 h"]}, {"category": "Restes et conservation", "food": "Buffet traiteur", "base": 3.2, "variability": 1.35, "states": ["Standard", "Conservation douteuse"]}, {"category": "Restes et conservation", "food": "Aliment avarié", "base": 4.0, "variability": 1.35, "states": ["Conservation douteuse"]}, {"category": "Plats composés", "food": "Pizza fromage", "base": 2.5, "variability": 1.25, "states": ["Standard"]}, {"category": "Plats composés", "food": "Pizza fromage + charcuterie", "base": 3.8, "variability": 1.3, "states": ["Standard"]}, {"category": "Plats composés", "food": "Sandwich jambon fromage", "base": 2.6, "variability": 1.2, "states": ["Standard"]}, {"category": "Plats composés", "food": "Sandwich salami", "base": 3.2, "variability": 1.24, "states": ["Standard"]}, {"category": "Plats composés", "food": "Burger fromage", "base": 2.8, "variability": 1.2, "states": ["Standard"]}, {"category": "Plats composés", "food": "Burger bacon fromage", "base": 3.4, "variability": 1.25, "states": ["Standard"]}, {"category": "Plats composés", "food": "Hot-dog", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Croque-monsieur", "base": 2.6, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Quiche lorraine", "base": 2.7, "variability": 1.2, "states": ["Standard"]}, {"category": "Plats composés", "food": "Quiche fromage", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Lasagnes", "base": 2.8, "variability": 1.2, "states": ["Standard"]}, {"category": "Plats composés", "food": "Cannelloni ricotta épinards", "base": 1.8, "variability": 1.12, "states": ["Standard"]}, {"category": "Plats composés", "food": "Gratin dauphinois", "base": 1.8, "variability": 1.12, "states": ["Standard"]}, {"category": "Plats composés", "food": "Gratin de pâtes au fromage", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Tartiflette", "base": 3.0, "variability": 1.22, "states": ["Standard"]}, {"category": "Plats composés", "food": "Raclette assiette", "base": 3.1, "variability": 1.22, "states": ["Standard"]}, {"category": "Plats composés", "food": "Fondue savoyarde", "base": 3.4, "variability": 1.25, "states": ["Standard"]}, {"category": "Plats composés", "food": "Pâtes carbonara", "base": 2.6, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Pâtes sauce au fromage", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Salade César industrielle", "base": 1.6, "variability": 1.12, "states": ["Standard"]}, {"category": "Plats composés", "food": "Wrap poulet fromage", "base": 2.0, "variability": 1.15, "states": ["Standard"]}, {"category": "Plats composés", "food": "Panini jambon fromage", "base": 2.7, "variability": 1.2, "states": ["Standard"]}, {"category": "Plats composés", "food": "Club sandwich", "base": 1.8, "variability": 1.12, "states": ["Standard"]}, {"category": "Plats composés", "food": "Feuilleté au fromage", "base": 2.2, "variability": 1.15, "states": ["Standard"]}, {"category": "Plats composés", "food": "Tarte salée au fromage", "base": 2.4, "variability": 1.18, "states": ["Standard"]}, {"category": "Plats composés", "food": "Plateau de fromages", "base": 3.6, "variability": 1.3, "states": ["Standard"]}, {"category": "Plats composés", "food": "Plateau de charcuteries", "base": 3.6, "variability": 1.3, "states": ["Standard"]}, {"category": "Plats composés", "food": "Buffet cocktail", "base": 3.0, "variability": 1.35, "states": ["Standard"]}, {"category": "Plats composés", "food": "Tapas variées", "base": 2.6, "variability": 1.22, "states": ["Standard"]}, {"category": "Plats composés", "food": "Brunch hôtel", "base": 2.8, "variability": 1.3, "states": ["Standard"]}, {"category": "Plats composés", "food": "Planchche mixte fromage-charcuterie", "base": 3.8, "variability": 1.32, "states": ["Standard"]}, {"category": "Plats composés", "food": "Sushi box industrielle", "base": 1.2, "variability": 1.1, "states": ["Standard"]}, {"category": "Plats composés", "food": "Bento industriel", "base": 1.4, "variability": 1.12, "states": ["Standard"]}, {"category": "Plats composés", "food": "Plat préparé industriel", "base": 2.2, "variability": 1.25, "states": ["Standard"]}, {"category": "Plats composés", "food": "Traiteur inconnu", "base": 3.0, "variability": 1.35, "states": ["Standard"]}];
const PORTION_DEFAULTS = {"Fromages": {"petite": {"label": "Petite", "range": [20, 30], "unit": "g", "example": "≈ 1 petite part"}, "normale": {"label": "Normale", "range": [40, 60], "unit": "g", "example": "≈ 1 portion d'assiette", "featured": true}, "importante": {"label": "Importante", "range": [80, 120], "unit": "g", "example": "≈ plateau généreux"}}, "Charcuteries": {"petite": {"label": "Petite", "range": [15, 25], "unit": "g", "example": "≈ 2–3 tranches fines"}, "normale": {"label": "Normale", "range": [40, 60], "unit": "g", "example": "≈ 5–8 tranches", "featured": true}, "importante": {"label": "Importante", "range": [80, 120], "unit": "g", "example": "≈ planche généreuse"}}, "Poissons et mer": {"petite": {"label": "Petite", "range": [20, 30], "unit": "g", "example": "≈ garniture"}, "normale": {"label": "Normale", "range": [50, 80], "unit": "g", "example": "≈ portion simple", "featured": true}, "importante": {"label": "Importante", "range": [100, 150], "unit": "g", "example": "≈ portion principale"}}, "Fermentés et condiments": {"petite": {"label": "Petite", "range": [5, 10], "unit": "mL", "example": "≈ 1–2 c. à café"}, "normale": {"label": "Normale", "range": [15, 30], "unit": "mL", "example": "≈ 1–2 c. à soupe", "featured": true}, "importante": {"label": "Importante", "range": [45, 60], "unit": "mL", "example": "≈ usage abondant"}}, "Fruits": {"petite": {"label": "Petite", "range": [60, 80], "unit": "g", "example": "≈ demi-fruit"}, "normale": {"label": "Normale", "range": [100, 130], "unit": "g", "example": "≈ 1 fruit moyen", "featured": true}, "importante": {"label": "Importante", "range": [180, 250], "unit": "g", "example": "≈ 2 fruits / grande portion"}}, "Légumes": {"petite": {"label": "Petite", "range": [50, 80], "unit": "g", "example": "≈ petite garniture"}, "normale": {"label": "Normale", "range": [120, 180], "unit": "g", "example": "≈ accompagnement", "featured": true}, "importante": {"label": "Importante", "range": [250, 350], "unit": "g", "example": "≈ grande assiette"}}, "Boissons alcoolisées": {"petite": {"label": "Petite", "range": [75, 120], "unit": "mL", "example": "≈ 1 petit verre"}, "normale": {"label": "Normale", "range": [150, 250], "unit": "mL", "example": "≈ 1 verre", "featured": true}, "importante": {"label": "Importante", "range": [300, 500], "unit": "mL", "example": "≈ 2–3 verres"}}, "Restes et conservation": {"petite": {"label": "Petite", "range": [100, 150], "unit": "g", "example": "≈ petite assiette"}, "normale": {"label": "Normale", "range": [200, 300], "unit": "g", "example": "≈ assiette standard", "featured": true}, "importante": {"label": "Importante", "range": [350, 500], "unit": "g", "example": "≈ plat copieux"}}, "Plats composés": {"petite": {"label": "Petite", "range": [100, 150], "unit": "g", "example": "≈ petite part"}, "normale": {"label": "Normale", "range": [200, 300], "unit": "g", "example": "≈ portion de référence", "featured": true}, "importante": {"label": "Importante", "range": [350, 500], "unit": "g", "example": "≈ portion très copieuse"}}};
const PORTION_OVERRIDES = {"Saucisson sec": {"petite": {"label": "Petite", "range": [15, 25], "unit": "g", "example": "≈ 2–3 tranches fines"}, "normale": {"label": "Normale", "range": [40, 60], "unit": "g", "example": "≈ 5–8 tranches", "featured": true}, "importante": {"label": "Importante", "range": [80, 120], "unit": "g", "example": "≈ planche généreuse"}}, "Salami": {"petite": {"label": "Petite", "range": [15, 25], "unit": "g", "example": "≈ 2–3 tranches fines"}, "normale": {"label": "Normale", "range": [40, 60], "unit": "g", "example": "≈ 5–8 tranches", "featured": true}, "importante": {"label": "Importante", "range": [80, 120], "unit": "g", "example": "≈ planche généreuse"}}, "Mozzarella": {"petite": {"label": "Petite", "range": [40, 60], "unit": "g", "example": "≈ 1/3 à 1/2 boule"}, "normale": {"label": "Normale", "range": [100, 125], "unit": "g", "example": "≈ 1 boule", "featured": true}, "importante": {"label": "Importante", "range": [150, 250], "unit": "g", "example": "≈ 1,5–2 boules"}}, "Banane": {"petite": {"label": "Petite", "range": [60, 80], "unit": "g", "example": "≈ petite demi-banane"}, "normale": {"label": "Normale", "range": [100, 130], "unit": "g", "example": "≈ 1 banane moyenne", "featured": true}, "importante": {"label": "Importante", "range": [180, 250], "unit": "g", "example": "≈ 2 bananes / grosse banane"}}, "Banane très mûre": {"petite": {"label": "Petite", "range": [60, 80], "unit": "g", "example": "≈ petite demi-banane"}, "normale": {"label": "Normale", "range": [100, 130], "unit": "g", "example": "≈ 1 banane moyenne", "featured": true}, "importante": {"label": "Importante", "range": [180, 250], "unit": "g", "example": "≈ 2 bananes / grosse banane"}}, "Avocat": {"petite": {"label": "Petite", "range": [70, 100], "unit": "g", "example": "≈ 1/2 petit avocat"}, "normale": {"label": "Normale", "range": [120, 170], "unit": "g", "example": "≈ 1 avocat moyen", "featured": true}, "importante": {"label": "Importante", "range": [220, 300], "unit": "g", "example": "≈ 1,5–2 avocats"}}, "Sauce soja": {"petite": {"label": "Petite", "range": [5, 10], "unit": "mL", "example": "≈ 1–2 c. à café"}, "normale": {"label": "Normale", "range": [15, 30], "unit": "mL", "example": "≈ 1–2 c. à soupe", "featured": true}, "importante": {"label": "Importante", "range": [45, 60], "unit": "mL", "example": "≈ usage abondant"}}, "Pizza fromage + charcuterie": {"petite": {"label": "Petite", "range": [100, 150], "unit": "g", "example": "≈ petite part"}, "normale": {"label": "Normale", "range": [200, 300], "unit": "g", "example": "≈ 1–2 parts", "featured": true}, "importante": {"label": "Importante", "range": [350, 500], "unit": "g", "example": "≈ 3+ parts"}}, "Pizza fromage": {"petite": {"label": "Petite", "range": [100, 150], "unit": "g", "example": "≈ petite part"}, "normale": {"label": "Normale", "range": [200, 300], "unit": "g", "example": "≈ 1–2 parts", "featured": true}, "importante": {"label": "Importante", "range": [350, 500], "unit": "g", "example": "≈ 3+ parts"}}, "Saumon fumé": {"petite": {"label": "Petite", "range": [20, 30], "unit": "g", "example": "≈ 1–2 tranches"}, "normale": {"label": "Normale", "range": [50, 80], "unit": "g", "example": "≈ 3–5 tranches", "featured": true}, "importante": {"label": "Importante", "range": [100, 150], "unit": "g", "example": "≈ grande assiette"}}, "Bière pression": {"petite": {"label": "Petite", "range": [150, 200], "unit": "mL", "example": "≈ petit verre"}, "normale": {"label": "Normale", "range": [250, 330], "unit": "mL", "example": "≈ 1 verre/pression", "featured": true}, "importante": {"label": "Importante", "range": [500, 750], "unit": "mL", "example": "≈ 2–3 verres"}}, "Vin rouge": {"petite": {"label": "Petite", "range": [75, 100], "unit": "mL", "example": "≈ demi-verre"}, "normale": {"label": "Normale", "range": [150, 180], "unit": "mL", "example": "≈ 1 verre", "featured": true}, "importante": {"label": "Importante", "range": [300, 450], "unit": "mL", "example": "≈ 2–3 verres"}}};
const PORTION_ORDER = ['petite','normale','importante'];

const STORAGE_DAY = 'nardil_v12_day';
const STORAGE_HISTORY = 'nardil_v12_history';

const stateFactors = {"Frais":1.0,"Peu mûr":1.0,"Ferme":1.0,"Mûr":1.4,"Très mûr":2.2,"Affiné":3.0,"Fermenté":3.4,"Mariné":3.5,"Fumé":2.0,"Restes 24 h":1.4,"Restes > 48 h":2.3,"Conservation douteuse":3.0,"Standard":1.0};
const portionFactors = {"petite":0.7,"normale":1.0,"importante":1.5};
const statusBaseFactor = {"Non traité":1.0,"Début (< 7 jours)":2.0,"Stabilisé (≥ 2 semaines)":5.0,"Arrêt récent (< 14 jours)":3.0};
const doseAdjustment = {"15 mg/j":0.85,"30 mg/j":0.95,"45 mg/j":1.00,"60 mg/j":1.06,"75 mg/j":1.10,"90 mg/j":1.14};
const profileRiskAdj = {"Standard":1.0,"Hypertendu / sensible":1.2,"Très sensible":1.4};
const scenarioUncertainty = {"Maison":1.0,"Restaurant":1.15,"Apéritif":1.10,"Snack":1.05};
let mealBasket = [];
let selectedPortion = 'normale';

function $(id) { return document.getElementById(id); }

function switchTab(name) {
  ['main','day','history','params','ref'].forEach(n => {
    $('tab-'+n).classList.remove('active');
    $('tabbtn-'+n).classList.remove('active');
    $('tab-'+n).style.display='none';
  });
  $('tab-'+name).classList.add('active');
  $('tabbtn-'+name).classList.add('active');
  $('tab-'+name).style.display='block';
}

function option(value,label) {
  const o=document.createElement('option');
  o.value=value;
  o.textContent=label||value;
  return o;
}

function getFoods(cat) {
  return FOODS.filter(f => f.category === cat);
}

function currentFood() {
  const fs = getFoods($('category').value);
  return fs.find(f => f.food === $('food').value) || fs[0];
}

function getPortionProfile(item) {
  return PORTION_OVERRIDES[item.food] || PORTION_DEFAULTS[item.category] || PORTION_DEFAULTS["Plats composés"];
}

function populateCategories() {
  const cats = [...new Set(FOODS.map(f => f.category))].sort();
  const sel = $('category');
  sel.innerHTML = '';
  cats.forEach(c => sel.appendChild(option(c)));
}

function populateFoods() {
  const foods = getFoods($('category').value);
  const sel = $('food');
  const current = sel.value;
  sel.innerHTML = '';
  foods.forEach(f => sel.appendChild(option(f.food)));
  if (foods.some(f => f.food === current)) sel.value = current;
}

function populateStates() {
  const item = currentFood();
  const sel = $('state');
  const current = sel.value;
  sel.innerHTML = '';
  item.states.forEach(s => sel.appendChild(option(s)));
  if (item.states.includes(current)) sel.value = current;
  $('stateHint').textContent = 'États disponibles : ' + item.states.join(', ');
}

function riskLabel(score) {
  if (score >= 55) return 'Très élevé';
  if (score >= 30) return 'Élevé';
  if (score >= 15) return 'Modéré';
  return 'Faible';
}

function riskClass(score) {
  if (score >= 55) return 'crit';
  if (score >= 30) return 'high';
  if (score >= 15) return 'mod';
  return 'low';
}

function computePortionPreview(key) {
  const item = currentFood();
  const state = $('state').value;
  const scenario = $('scenario').value;
  const status = $('status').value;
  const dose = $('dose').value;
  const profile = $('profile').value;

  let raw = item.base * item.variability * (stateFactors[state] || 1) * (portionFactors[key] || 1);
  raw *= (scenarioUncertainty[scenario] || 1);
  raw *= (statusBaseFactor[status] || 1) * (doseAdjustment[dose] || 1);
  const score = raw * 2.6 * (profileRiskAdj[profile] || 1);
  return score;
}

function renderPortionCards() {
  const profile = getPortionProfile(currentFood());
  const container = $('portionCards');
  container.innerHTML = '';
  PORTION_ORDER.forEach(key => {
    const meta = profile[key];
    const score = computePortionPreview(key);
    const div = document.createElement('button');
    div.type='button';
    div.className = 'portionCard' + (selectedPortion===key ? ' selected':'') + (meta.featured ? ' featured':'');
    div.innerHTML =
      '<div class="portionTitle">' + meta.label + (meta.featured ? ' <span class="tag">référence</span>' : '') + '</div>' +
      '<div class="portionRange">' + meta.range[0] + '–' + meta.range[1] + ' ' + meta.unit + '</div>' +
      '<div class="portionExample">' + meta.example + '</div>' +
      '<div class="portionScore ' + riskClass(score) + '">Score estimé : ' + score.toFixed(1) + ' · ' + riskLabel(score) + '</div>';
    div.addEventListener('click', () => {
      selectedPortion = key;
      renderPortionCards();
      renderAll();
    });
    container.appendChild(div);
  });
}

function updatePortionInfo() {
  const profile = getPortionProfile(currentFood());
  const meta = profile[selectedPortion];
  $('portionInfo').innerHTML =
    '<strong>Portion sélectionnée :</strong> ' + meta.label + ' (' + meta.range[0] + '–' + meta.range[1] + ' ' + meta.unit + ')<br>' +
    '<strong>Repère pratique :</strong> ' + meta.example;
}

function openPortionInfo() {
  $('infoOverlay').style.display='block';
  $('infoBox').style.display='block';
}

function closePortionInfo() {
  $('infoOverlay').style.display='none';
  $('infoBox').style.display='none';
}

function oneCompOral(t, dose, ka, ke) {
  if (t < 0) return 0;
  if (Math.abs(ka-ke) < 1e-8) return dose * ka * t * Math.exp(-ke*t);
  const v = dose * (ka/(ka-ke)) * (Math.exp(-ke*t) - Math.exp(-ka*t));
  return Math.max(0, v);
}

function selectedEntry() {
  const item = currentFood();
  return {
    category:item.category,
    food:item.food,
    state:$('state').value,
    portion:selectedPortion,
    base:item.base,
    variability:item.variability
  };
}

function entriesForScenario() {
  return mealBasket.length ? mealBasket.slice() : [selectedEntry()];
}

function computeScenario() {
  const settings = {
    scenario:$('scenario').value,
    stayLow:$('stayLow').value,
    status:$('status').value,
    dose:$('dose').value,
    profile:$('profile').value,
    interval:parseFloat($('interval').value)
  };
  const entries = entriesForScenario();
  const uncertainty = scenarioUncertainty[settings.scenario];
  const maoFactor = statusBaseFactor[settings.status] * doseAdjustment[settings.dose];
  const ka = settings.interval <= 2 ? 2.4 : 2.1;
  const ke = 0.78, dt = 0.05, totalH = 10;
  let charge = 0, tyrEq = 0, maxVar = 1.0, baseRiskSum = 0;
  const entryDoses = [];
  entries.forEach(e => {
    let d = e.base * e.variability * (stateFactors[e.state] || 1) * (portionFactors[e.portion] || 1) * uncertainty * maoFactor;
    if (settings.stayLow === 'Oui') d *= 0.92;
    entryDoses.push(d);
    charge += d;
    tyrEq += e.base * (stateFactors[e.state] || 1) * (portionFactors[e.portion] || 1) * uncertainty * 2.6 * (settings.stayLow === 'Oui' ? 0.92 : 1);
    if (e.variability > maxVar) maxVar = e.variability;
    baseRiskSum += e.base * e.variability;
  });
  const rows = [];
  let peak = {t:0, exp:0, risk:0};
  for (let t=0;t<=totalH+1e-9;t+=dt) {
    let exp = 0;
    entryDoses.forEach(d => exp += oneCompOral(t,d,ka,ke));
    const risk = exp * 8.0 * profileRiskAdj[settings.profile];
    rows.push({t, exp, risk});
    if (risk > peak.risk) peak = {t, exp, risk};
  }
  return {entries, settings, charge, tyrEq, rows, peak, maxVar, baseRiskSum};
}

function renderSvgChart(targetId, rows, peak, series) {
  const width=760, height=260, pad={l:42,r:16,t:14,b:26};
  const maxX = rows.length ? rows[rows.length-1].t : 1;
  let maxY = 60;
  rows.forEach(r => { if (r.risk > maxY) maxY = r.risk; });
  if (series && series.length) series.forEach(s => s.rows.forEach(r => { if (r.risk > maxY) maxY = r.risk; }));
  maxY *= 1.08;
  const x = v => pad.l + (v/maxX)*(width-pad.l-pad.r);
  const y = v => height-pad.b - (v/maxY)*(height-pad.t-pad.b);
  const pathFor = arr => arr.map((r,i)=>(i===0?'M':'L') + x(r.t).toFixed(2) + ',' + y(r.risk).toFixed(2)).join(' ');
  let grid='', ylabels='', xlabels='';
  for(let i=0;i<=4;i++) {
    const yy = pad.t + i*(height-pad.t-pad.b)/4;
    grid += `<line x1="${pad.l}" y1="${yy.toFixed(2)}" x2="${width-pad.r}" y2="${yy.toFixed(2)}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  }
  [0,15,30,55].forEach(v => {
    ylabels += `<text x="8" y="${(y(v)+4).toFixed(2)}" fill="#9fb0d8" font-size="11">${v}</text>`;
  });
  const steps = Math.min(6, Math.max(3, Math.round(maxX/2)));
  for(let i=0;i<=steps;i++) {
    const xv = maxX*i/steps;
    xlabels += `<text x="${(x(xv)-8).toFixed(2)}" y="${height-8}" fill="#9fb0d8" font-size="11">${xv.toFixed(0)}h</text>`;
  }
  let extra='';
  if (series && series.length) {
    const colors=['#6ea8ff','#9dd39c','#f2a65a','#d68fd6','#7fd3d4','#c8d67f'];
    series.forEach((s,i) => {
      extra += `<path d="${pathFor(s.rows)}" fill="none" stroke="${colors[i % colors.length]}" stroke-width="1.6" opacity="0.9"/>`;
    });
  }
  const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${width}" height="${height}" fill="#091327"/>
    ${grid}
    <rect x="${pad.l}" y="${y(maxY).toFixed(2)}" width="${width-pad.l-pad.r}" height="${(y(55)-y(maxY)).toFixed(2)}" fill="rgba(183,28,28,0.12)"/>
    <rect x="${pad.l}" y="${y(55).toFixed(2)}" width="${width-pad.l-pad.r}" height="${(y(30)-y(55)).toFixed(2)}" fill="rgba(201,106,34,0.12)"/>
    <rect x="${pad.l}" y="${y(30).toFixed(2)}" width="${width-pad.l-pad.r}" height="${(y(15)-y(30)).toFixed(2)}" fill="rgba(185,134,17,0.12)"/>
    <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${height-pad.b}" stroke="rgba(255,255,255,0.25)"/>
    <line x1="${pad.l}" y1="${height-pad.b}" x2="${width-pad.r}" y2="${height-pad.b}" stroke="rgba(255,255,255,0.25)"/>
    ${ylabels}${xlabels}${extra}
    <path d="${pathFor(rows)}" fill="none" stroke="#d8b055" stroke-width="2.8"/>
    <circle cx="${x(peak.t).toFixed(2)}" cy="${y(peak.risk).toFixed(2)}" r="4" fill="#efcb70"/>
  </svg>`;
  $(targetId).innerHTML = svg;
}

function renderMealBasket() {
  const el = $('mealItems');
  el.innerHTML = '';
  if (!mealBasket.length) {
    el.innerHTML = '<div class="small">Aucun aliment ajouté. Le calcul porte sur le produit affiché.</div>';
    return;
  }
  mealBasket.forEach((entry, idx) => {
    const chip = document.createElement('div');
    chip.className = 'mealchip';
    chip.innerHTML = '<span>' + entry.food + ' · ' + entry.state + ' · ' + entry.portion + '</span>';
    const btn = document.createElement('button');
    btn.type='button';
    btn.textContent='×';
    btn.onclick = () => {
      mealBasket.splice(idx,1);
      renderMealBasket();
      renderAll();
    };
    chip.appendChild(btn);
    el.appendChild(chip);
  });
}

function addCurrentFoodToMeal() {
  mealBasket.push(selectedEntry());
  renderMealBasket();
  renderAll();
}

function clearMeal() {
  mealBasket = [];
  renderMealBasket();
  renderAll();
}

function getDay() {
  try { return JSON.parse(localStorage.getItem(STORAGE_DAY) || '[]'); }
  catch(e) { return []; }
}

function setDay(day) {
  localStorage.setItem(STORAGE_DAY, JSON.stringify(day));
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_HISTORY) || '[]'); }
  catch(e) { return []; }
}

function setHistory(h) {
  localStorage.setItem(STORAGE_HISTORY, JSON.stringify(h));
}

function appendHistory(entry) {
  const hist = getHistory();
  hist.unshift(entry);
  setHistory(hist.slice(0,50));
}

function addMealToDay() {
  const s = computeScenario();
  const mealTime = $('mealTime').value || '12:30';
  const day = getDay();
  const entry = {
    ts: new Date().toISOString(),
    display_time: mealTime,
    label: s.entries.map(e => e.food).join(' + '),
    scenario: s.settings.scenario,
    charge: Number(s.charge.toFixed(2)),
    risk: Number(s.peak.risk.toFixed(1)),
    items: s.entries,
    rows: s.rows.map(r => ({t:Number(r.t.toFixed(2)), risk:Number(r.risk.toFixed(2))}))
  };
  day.push(entry);
  day.sort((a,b) => (a.display_time || '').localeCompare(b.display_time || ''));
  setDay(day);
  appendHistory(entry);
  renderHistory();
  renderDaySummary();
  switchTab('day');
}

function clearDay() {
  setDay([]);
  renderDaySummary();
}

function aggregateDayRows(day) {
  const dt=0.05, totalH=24, rows=[];
  let peak={t:0,risk:0};
  const offsets = day.map(entry => {
    const p = (entry.display_time || '12:30').split(':');
    return (parseInt(p[0] || '12', 10)) + (parseInt(p[1] || '0', 10))/60;
  });
  const series = day.map((entry,i)=>({label:(entry.display_time || '') + ' · ' + entry.label, rows:[]}));
  for(let t=0;t<=totalH+1e-9;t+=dt) {
    let risk=0;
    for(let i=0;i<day.length;i++) {
      const localT = t - offsets[i];
      let indiv=0;
      if(localT >= 0) {
        const entryRows = day[i].rows || [];
        if(entryRows.length) {
          const idx = Math.min(entryRows.length-1, Math.max(0, Math.round(localT/dt)));
          indiv = entryRows[idx].risk || 0;
        }
      }
      series[i].rows.push({t:Number(t.toFixed(2)), risk:indiv});
      risk += indiv;
    }
    rows.push({t:Number(t.toFixed(2)), risk:risk});
    if(risk > peak.risk) peak={t:Number(t.toFixed(2)), risk:risk};
  }
  return {rows, peak, series};
}

function renderDaySummary() {
  const day = getDay();
  $('dayCount').textContent = String(day.length);
  let charge=0, peak=0;
  day.forEach(x => { charge += x.charge; if(x.risk > peak) peak = x.risk; });
  $('dayCharge').textContent = charge.toFixed(1);
  $('dayPeak').textContent = peak.toFixed(1);
  $('dayLevel').textContent = day.length ? riskLabel(peak) : '—';

  const alerts = [];
  if(day.length >= 3) alerts.push('Plusieurs repas enregistrés : raisonner en cumul journalier.');
  if(charge >= 40) alerts.push('Charge cumulée notable sur la journée.');
  if(peak >= 55) alerts.push('Au moins un repas a atteint un niveau très élevé.');
  $('dayAlerts').innerHTML = alerts.length ? alerts.map(t => '<div class="alert">' + t + '</div>').join('') : '<div class="small">Aucune alerte journalière majeure.</div>';

  const tbody = $('dayTable');
  tbody.innerHTML = '';
  day.forEach(row => {
    const tr = document.createElement('tr');
    [row.display_time || '', row.label, row.scenario, row.charge.toFixed(1), row.risk.toFixed(1)].forEach(v => {
      const td = document.createElement('td');
      td.textContent = v;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  if(day.length) {
    const agg = aggregateDayRows(day);
    renderSvgChart('dayChart', agg.rows, agg.peak, agg.series);
  } else {
    $('dayChart').innerHTML = '<div class="small">Aucun repas enregistré pour la journée.</div>';
  }
}

function renderHistory() {
  const hist = getHistory();
  const box = $('historyBox');
  const learn = $('learningBox');
  if(!hist.length) {
    box.innerHTML = '<div class="small">Aucun historique enregistré.</div>';
    learn.innerHTML = '<div class="small">Les apprentissages personnels apparaîtront ici après quelques repas enregistrés.</div>';
    return;
  }
  box.innerHTML = hist.slice(0,10).map(h =>
    '<div class="historyItem"><strong>' + (h.display_time || '') + '</strong> — ' + h.label + ' · score ' + h.risk.toFixed(1) + '</div>'
  ).join('');

  const productCounts = {};
  const categoryCounts = {};
  hist.forEach(h => {
    (h.items || []).forEach(i => {
      productCounts[i.food] = (productCounts[i.food] || 0) + 1;
      categoryCounts[i.category] = (categoryCounts[i.category] || 0) + 1;
    });
  });
  const topProducts = Object.entries(productCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const topCats = Object.entries(categoryCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const notes = [];
  if(topProducts.length) notes.push('Produits les plus fréquents : ' + topProducts.map(x => x[0] + ' (' + x[1] + ')').join(', '));
  if(topCats.length) notes.push('Catégories les plus fréquentes : ' + topCats.map(x => x[0] + ' (' + x[1] + ')').join(', '));
  const recentHigh = hist.filter(h => h.risk >= 30).length;
  if(recentHigh >= 2) notes.push('Vigilance : plusieurs repas récents se situent en zone élevée.');
  learn.innerHTML = notes.map(t => '<div class="infoCard">' + t + '</div>').join('');
}

function buildRef() {
  const groups = {};
  FOODS.forEach(f => {
    if(!groups[f.category]) groups[f.category] = [];
    groups[f.category].push(f);
  });
  const container = $('refGroups');
  container.innerHTML = '';
  Object.keys(groups).sort().forEach((cat, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'refgroup';
    const head = document.createElement('div');
    head.className = 'refhead';
    head.innerHTML = '<span>' + cat + ' (' + groups[cat].length + ')</span><span>' + (idx===0 ? '−' : '+') + '</span>';
    const body = document.createElement('div');
    body.className = 'refbody' + (idx===0 ? ' open' : '');
    groups[cat].forEach(f => {
      const item = document.createElement('div');
      item.className = 'refitem';
      item.innerHTML = '<div><strong>' + f.food + '</strong></div><div class="small">États : ' + f.states.join(', ') + '</div>';
      body.appendChild(item);
    });
    head.onclick = () => {
      body.classList.toggle('open');
      head.lastElementChild.textContent = body.classList.contains('open') ? '−' : '+';
    };
    wrap.appendChild(head);
    wrap.appendChild(body);
    container.appendChild(wrap);
  });
}

function renderAll() {
  const s = computeScenario();
  const score = s.peak.risk;
  $('decisionHero').textContent =
    score >= 55 ? 'À éviter sous Nardil dans ce scénario.' :
    score >= 30 ? 'Risque élevé : déconseillé sous Nardil.' :
    score >= 15 ? 'Tolérable avec prudence dans ce scénario.' :
    'Faible risque relatif dans ce scénario.';
  $('decisionHero').className = 'heroDecision ' + riskClass(score) + 'Box';
  $('foodColor').textContent = score >= 30 ? '🔴 Produit à forte vigilance' : score >= 15 ? '🟡 Produit à surveiller' : '🟢 Produit plutôt bas';
  $('riskBadge').textContent = 'Risque : ' + riskLabel(score).toLowerCase();
  $('confidence').textContent = 'Confiance : ' + (s.maxVar >= 1.30 ? 'faible' : s.maxVar >= 1.12 ? 'moyenne' : 'bonne');
  $('tyrEqOut').textContent = s.tyrEq.toFixed(1) + ' mg';
  $('chargeOut').textContent = s.charge.toFixed(2);
  $('peakOut').textContent = s.peak.exp.toFixed(2);
  $('windowOut').textContent = Math.max(0, s.peak.t - 0.8).toFixed(1) + '–' + (s.peak.t + 1.2).toFixed(1) + ' h';
  let clearanceT = 0;
  const threshold = Math.max(1, s.peak.risk * 0.1);
  for(let i=0;i<s.rows.length;i++) {
    if(s.rows[i].t > s.peak.t && s.rows[i].risk <= threshold) { clearanceT = s.rows[i].t; break; }
  }
  if(!clearanceT) clearanceT = s.rows[s.rows.length-1].t;
  $('clearanceOut').textContent = clearanceT.toFixed(1) + ' h';

  const info = [];
  if(s.entries.length > 1) info.push('Repas complet : le calcul additionne les contributions de chaque produit du repas courant.');
  if(s.tyrEq >= 10) info.push('Équivalent tyramine estimé élevé pour une exposition sous Nardil.');
  else if(s.tyrEq >= 5) info.push('Équivalent tyramine estimé en zone sensible sous Nardil.');
  else info.push('Équivalent tyramine estimé plutôt bas, sous réserve de variabilité réelle.');
  $('infoBox').innerHTML = info.map(t => '<div class="infoCard">' + t + '</div>').join('');

  const alerts = [];
  const day = getDay();
  if(day.length >= 2) alerts.push('Contexte patient : plusieurs repas déjà enregistrés aujourd’hui.');
  if(day.some(x => x.risk >= 30)) alerts.push('Alerte intelligente : un repas élevé a déjà été enregistré aujourd’hui.');
  if($('scenario').value === 'Restaurant') alerts.push('Restaurant : variabilité accrue, recette et conservation moins contrôlables.');
  if(score >= 55) alerts.push('Scénario simulé à risque relatif très élevé.');
  $('alertsBox').innerHTML = alerts.length ? alerts.map(t => '<div class="alert">' + t + '</div>').join('') : '<div class="small">Aucune alerte spécifique autre que la prudence générale sous Nardil.</div>';

  renderPortionCards();
  updatePortionInfo();
  renderSvgChart('chart', s.rows, s.peak, null);
  renderDaySummary();
}

function init() {
  populateCategories();
  $('category').value = 'Fruits';
  populateFoods();
  populateStates();
  renderPortionCards();
  bind();
  buildRef();
  renderMealBasket();
  renderHistory();
  switchTab('main');
  renderAll();
}

function bind() {
  $('category').addEventListener('change', () => {
    populateFoods();
    populateStates();
    selectedPortion = 'normale';
    renderAll();
  });
  $('food').addEventListener('change', () => {
    populateStates();
    selectedPortion = 'normale';
    renderAll();
  });
  $('state').addEventListener('change', renderAll);
  $('scenario').addEventListener('change', renderAll);
  $('stayLow').addEventListener('change', renderAll);
  $('status').addEventListener('change', renderAll);
  $('dose').addEventListener('change', renderAll);
  $('profile').addEventListener('change', renderAll);
  $('interval').addEventListener('change', renderAll);
  $('portionInfoBtn').addEventListener('click', openPortionInfo);
  $('closeInfoBtn').addEventListener('click', closePortionInfo);
  $('infoOverlay').addEventListener('click', closePortionInfo);
}

document.addEventListener('DOMContentLoaded', init);
