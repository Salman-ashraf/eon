import { Grid } from "@mui/material";
import InternalRateReturn from "@src/components/InternalRateReturn/InternalRateReturn";
import { mockTrendData } from "./mockData";

export interface TrendData {
  id: string;
  title: string;
  value: number;
  percentage: number;
}

const TrendAnalysis = () => {
  return (
    <section className="trend-analysis">
      <Grid container spacing={2}>
        {mockTrendData.map((trend) => (
          <Grid item xs={12} sm={6} md={3} key={trend.id}>
            <InternalRateReturn
              className="trend-item"
              title={trend.title}
              value={trend.value}
              percentage={trend.percentage}
            />
          </Grid>
        ))}
      </Grid>
      <style>{`
        .trend-analysis {
          padding: 24px;
        }
        .trend-item {
          min-width: 240px;
          flex: 1;
          flex-basis: 0%;
        }
        @media (max-width: 600px) {
          .trend-analysis {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrendAnalysis;
