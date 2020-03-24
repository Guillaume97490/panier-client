"use strict";
module.exports = (sequelize, DataTypes) => {
	const ArticleHasPanier = sequelize.define(
		"ArticleHasPanier", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			quantite: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			articles_id: { 
				type: DataTypes.INTEGER, 
				allowNull: false 
			},
			paniers_id: { 
				type: DataTypes.INTEGER, 
				allowNull: false 
			}
		}, 
		{
			tableName: 'articles_has_paniers', 
			timestamps: false, 
			underscored: true
		}
	);
	ArticleHasPanier.associate = function(models) {
		// associations can be defined here
		
// LignePanier.belongsTo(Panier,{foreignKey: 'paniers_id'}); // 1 ligne de panier appartien à un Panier.
// Panier.hasMany(LignePanier, {foreignKey: 'paniers_id'});// Une panier peut avoir plusieur lignes panier.

// LignePanier.belongsTo(Article,{foreignKey: 'articles_id'}); // 1 ligne de panier concerne un article.
// Article.hasMany(LignePanier, {foreignKey: 'articles_id'});// Un article peut avoir plusieur lignes panier.
	};
	return ArticleHasPanier;
};
